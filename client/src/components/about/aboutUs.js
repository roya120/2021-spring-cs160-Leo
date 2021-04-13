import React, {Component} from 'react'
import about from '../images/about.jpg'


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
                <h3>About Us</h3>
                <p>The physical weight of the book imparts a sense of gravitas.<br></br>
                 In reading a book you are dealing with a real thing and not just digital wind,<br></br>
                so it feels like something to take more seriously, respect more, and value greater than an ebook.<br></br><br></br>
                Our goal is to bring a better experience of reading books and disconnect you from the digital world<br></br>
                for moments. We collected books in different categories and you can borrow them and enjoy reading<br></br>
                physical books with saving money and saving the planet.</p>
                <div class= "aboutImage">
                    <img src = {about} alt = "about" height="5%" width="50%"/>
                </div>
                
             
        </div>
        </form>
    )
}
export default About;