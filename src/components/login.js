import React, {Component} from 'react'


class Login extends Component{
render() {
    return (

        <form action >
            <div class = "navigationBar">
             <a class="active" href="library.html">Library</a>
             <a href="/register">Login/Signup</a>
            <a href="contact.html">Contact Us</a>
            <a href="#about">About</a>
        </div>
        <div class="container">
<h1>login</h1>

<label> Email</label>
<input type ="text" placeholder = "Enter your email" name = "email"/><br></br>
<label> Password</label>
<input type ="password" placeholder = "Enter Firstname" name = "firstname"/><br></br>



<button type="submit" class="registerbtn">Login</button>
</div>
<p>Don't have an account? Join us!<a href="/register">Sign Up</a>.</p>


        


        


    </form>
    )
}
}
export default Login;