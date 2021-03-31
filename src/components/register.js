import React, {Component} from 'react'


class Register extends Component{

    handleSubmit = e =>{
        e.preventDefault();
        console.log('works')
    }
render() {
    return (
        <form action ="./login">
            <div class = "navigationBar">
             <a class="active" href='/library'>Library</a>
             <a  href='/'>Home</a>
             <a href="/register">Login/Signup</a>
            <a href='/contact'>Contact Us</a>
            <a href="#about">About</a>
        </div>
            <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <label> Firstname</label>
    <input type ="text" placeholder = "Enter Firstname" name = "firstname"/><br></br>
    <label> Lastname</label>
    <input type ="text" placeholder = "Enter Lastname" name = "lastname"/><br></br>
    <label> Email</label>
    <input type ="text" placeholder = "Enter your email" name = "email"/><br></br>
    <label> Password</label>
    <input type ="password" placeholder = "Enter Firstname" name = "firstname"/><br></br>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" class="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="/login">Sign in</a>.</p>
  </div>
            


            


        </form>
    )
}
}
export default Register;