import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.css'
import mainpage from '../images/mainpage.png'
import catalog from '../images/catalog.png'
import bookclub from '../images/book-club.png'


function Home() {
    return (

        <div>
        <div class = "navigationBar">
        <a  href='/'>Home</a>
         <a class="active" href='/booklist'>Library</a>
         <a href="/login">Login/Signup</a>
        <a href='/contact'>Contact Us</a>
        <a href="/about">About</a>
        </div>
        <h1 align = "middle"><b>Welcome to Bookey</b></h1>
        <div class = "welcomeLibrary">
       
        <img src = {mainpage} alt = "mainpage" height="8%" width="50%"/>
        </div>

        <div class = "events">
        <div class="event-row">
            <img src={catalog} alt = "catalog"></img>
            <h3>Library Catalog</h3>
            <a href="/booklist" class="myButton">view our catalog</a>
            <p>We offer variety of books that can be picked up or delivered to you. </p>
            </div><br></br><br></br>
            <div class = "event-row">
                <img src = {bookclub} alt = "event"></img> 
                <h3>Book Club</h3>
                <a href="club" class="myButton">view our club</a>
                <p>Here you can sign up for any book club you are intersted in.</p>

            </div>
        </div>

        
        
        </div>
    )

}


export default Home