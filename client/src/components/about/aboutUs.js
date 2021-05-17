import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './abouUS.css'
import aboutImage from '../images/aboutImage.png'

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
                <div class="aboutContainer">
                <img class="aboutImage" src={aboutImage} alt = "about" width="500" height="300"></img>
                </div>

                <div class="aboutLibrary">
                <h1>About The Library</h1>
                <p>The primary goal of this online library is to promote reading and
                    encouraging people to share and find new books.
                </p>

                <p>There are many people who still might prefer paper books, using this website
                    nothing will wasted and users can take adavantage of the books offered. 
                </p> 
                <p>Here you can see a list of books currently being offered 
                    <a href="/booklist"> HERE</a> </p>

                <p>We also have bookclubs available for people who are intersted
                     in talking about the specific book and share their opions.</p>
                     <p>BookClub information can be viwed 
                    <a href="/club"> HERE</a> </p>


                    </div>
                
                    <div class="aboutLibrary">
                 <h1>About US</h1>
                 <p>We are a group of students who decided on creating an online 
                     book library for a class project. Contact us with any questions or concerns<a href="/contact"> contact</a>
                 </p>
                </div>
                
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
        </div>

        </form>
    )
}
export default About;