import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './register.css'
import {showErrMsg, showSuccessMsg} from '../notifications/Notification'


const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password:'',
    err: '',
    success: ''
}
const isEmpty = value => {
    if(!value) return true
     return false
}

 const isEmail = email => {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

 const isLength = password => {
    if(password.length < 6) return true
    return false
}

 const isMatch = (password, cf_password) => {
    if(password === cf_password) return true
    return false
}
 

function Register() {

    
    const [user, setUser] = useState(initialState)

    const {firstname, lastname, email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(firstname) || isEmpty(lastname) || isEmpty(email) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
                return setUser({...user, err: "Invalid emails.", success: ''})
    
        if(isLength(password))
                return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        try{
            
            const res = await axios.post('http://localhost:5000/user/register', {
                firstname, lastname, email, password
            })

            setUser({...user, err: '', success: res.data.msg})
            

        }
        catch(err){
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})

        }
    }

    

    return (
        <div>  
        
            
        <div class = "navigationBar">
         
         <a  href='/'>Home</a>
         <a class="active" href='/booklist'>Library</a>
         <a href="/login">Login/Signup</a>
         
        <a href='/contact'>Contact Us</a>
        <a href="/about">About</a>
    </div>
    
    <form action ='/login' onSubmit={handleSubmit}>
        <div class="RegisterCenter">
<h1>Register</h1>
{err && showErrMsg(err)}
    {success && showSuccessMsg(success)}

<p>Please fill in this form to create an account.</p>

                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <br></br>
                    <input type="text" placeholder="Enter your firstname" id="firstname"
                    value={firstname} name="firstname" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <br></br>
                    <input type="text" placeholder="Enter your lastname" id="lastname"
                    value={lastname} name="lastname" onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <input type="text" placeholder="Enter your email" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br></br>
                    <input type="password" placeholder="Enter your password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>
<p>By creating an account you agree to our <a href="">Terms & Privacy</a>.</p>

<button type="submit" class="registerbtn">Register</button>
</div>

<div class="container signin">
<p>Already have an account? <a href="/login">Sign in</a>.</p>
</div>
        


    </form>
    </div>
    )

}


export default Register