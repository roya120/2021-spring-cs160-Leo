import React, {Component} from 'react'


function About() {


    return (
        <form action ="mailto:info@roya.torshizi@gmail.com" method = "POST" encType ="text/plain"> 
        <div class = "navigationBar">
        <a  href='/'>Home</a>
         <a class="active" href='/booklist'>Library</a>
         <a href="/login">Login/Signup</a>
        <a href='/contact'>Contact Us</a>
        <a href="/about">About</a>
        </div>
            <div>
                <h1>Coming Soon!!</h1>
                
             
        </div>
        </form>
    )
}
export default About;