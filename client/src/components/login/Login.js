import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import {showErrMsg, showSuccessMsg} from '../notifications/Notification'
import { GoogleLogin } from 'react-google-login';



const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login() {

    const [user, setUser] = useState(initialState)

    const {email, password, err, success} = user


    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/user/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})

        }
        catch(err)
        {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})

        }

    }
    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('http://localhost:5000/user/google_login', {tokenId: response.tokenId})

            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

           
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }
    return (
        <div >
           
            <form onSubmit={handleSubmit}>
            <div class = "navigationBar">
            <a  href='/'>Home</a>
         <a class="active" href='/booklist'>Library</a>
         <a href="/login">Login/Signup</a>
        <a href='/contact'>Contact Us</a>
        <a href="/about">About</a>
        </div>
        <div class = "logInCenter">
        <h1>Login Page</h1>
        {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            
                <div class="container">
                    <label htmlFor="email">Email Address</label>
                    <br></br>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
              

                <div>
                
                    <label htmlFor="password">Password</label>
                    <br></br>
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                
                </div>
                
                <button type="submit" class="registerbtn">Login</button>
                <p>Don't have an account? Join us!<a href="/register">Sign Up</a>.</p>

               </div>
               </div>
            </form>
            
            <div class = "logInCenter2">
             <p>Or Login with </p>
            

            <div>
            <GoogleLogin
                    clientId="1018153860225-sun45c22catdsclgtl9uo0bmid7267a0.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    
                    cookiePolicy={'single_host_origin'}
            />

            </div>
            </div>
            
        
            
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            
            


        </div>
    )
        

    
}
export default Login