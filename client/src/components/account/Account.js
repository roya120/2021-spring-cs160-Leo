import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './account.css'
import profile from '../images/profile.png'
import list from '../images/list.png'
import mainpage from '../images/mainpage.png'
import catalog from '../images/catalog.png'
import bookclub from '../images/book-club.png'


function Account(){
    return(
<div>

<div class="navigationBar20">
   
   <a href="/">Library</a>
   <a href="">User Account</a>
   <a href="/contact">Contact Us</a>
   <a href="/volunteer">Volunteer</a>
   <a href="/">Logout</a>
 </div>
 <div class = "events">
        <div class="event-row">
            <img class="profileImage" src={profile} alt = "profile" width="100" height="100"></img>
            <h3>Update Information</h3>
            <a href="/" class="myButton">view your profile</a>

            <div class="event-row2">
            <img class="listImage" src={list} alt = "list" width="100" height="100"></img>
            <h3>Your Orders</h3>
            <a href="/booklist" class="myButton">view your list</a>
            </div>
            
            </div><br></br><br></br>
            <div class = "event-row">
                <img src = {bookclub} alt = "event" width="100" height="100"></img> 
                <h3>Your Clubs</h3>
                <a href="club" class="myButton">view your clubs</a>

           

            </div>
        </div>
 </div>







    )
}

export default Account
