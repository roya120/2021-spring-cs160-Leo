import React, {Component} from 'react'


class Contact extends Component{

    handleSubmit = e =>{
        e.preventDefault();
        console.log('works')
    }
render() {
    return (
        <form action ="mailto:info@roya.torshizi@gmail.com" method = "POST" encType ="text/plain"> 
        <div class = "navigationBar">
             <a class="active" href='/library'>Library</a>
             <a  href='/'>Home</a>
             <a href="/register">Login/Signup</a>
            <a href='/contact'>Contact Us</a>
            <a href="#about">About</a>
        </div>
            <div>
                <h3>Contact Us</h3>
                <div>
                {/* <label> Name: </label>
                <input type="text" name="yourName" value=""/><br/> */}
                <label>Name: </label>
                <input type="text" name="yourName" value=""/><br/>
                <label>Email: </label>
                <input type="text" name="yourEmail" value=""/><br/>
                <label>Message: </label>
                <textarea name="yourMessage" rows="8" cols="65"/><br/>
                {/* <textarea name="yourMessage" rows="10" cols="30"/><br/>
                <input type="submit" name="" /> */}
                </div>
             
        </div>
        </form>
    )
}
}
export default Contact;