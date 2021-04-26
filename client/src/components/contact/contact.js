import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './contact.css'

function Contact() {


    return (
        <form action ="mailto:info@roya.torshizi@gmail.com" method = "POST" encType ="text/plain"> 
        <div class = "navigationBarr">
        <a  href='/'>Home</a>
         <a  href='/booklist'>Library</a>
         <a href="/login">Login/Signup</a>
        <a href='/contact'>Contact Us</a>
        <a href="/about">About</a>
        </div>
            <div class="contactUs">
                <h3 class="h3Class">Contact Us</h3>
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
export default Contact;