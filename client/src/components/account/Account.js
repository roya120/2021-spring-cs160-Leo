import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'
import './account.css'
import profile from '../images/profile.png'
import list from '../images/list.png'
import mainpage from '../images/mainpage.png'
import catalog from '../images/catalog.png'
import bookclub from '../images/book-club.png'
import {showErrMsg, showSuccessMsg} from '../notifications/Notification'

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password:'',
    err: '',
    success: ''
}

function Account(){
    const [user, setUser] = useState(initialState)

    

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:5000//user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
      }
    return(
<div>

<div class="navigationBar20">
   
    <a href="/loggedIn">Home</a>
   <a href="/loggedBooklist">Library</a>
  
   
   <a class= "LogoutLeft" href="/" onClick={handleLogout} >LogOut</a>
 </div>
 <div class = "events">
        <div class="event-row">
            <img class="profileImage" src={profile} alt = "profile" width="100" height="100"></img>
            <h3>User Information</h3>
            <div>
            <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" defaultValue={user.firstname}/>
            </div>

            

            <div class="event-row2">
            <img class="listImage" src={list} alt = "list" width="100" height="100"></img>
            <h3>Your Orders</h3>
           
            </div>
            
            </div><br></br><br></br>
            {/* <div class = "event-row">
                <img src = {bookclub} alt = "event" width="100" height="100"></img> 
                <h3>Your Clubs</h3>
                

           

            </div> */}
        </div>
 </div>







    )
}

export default Account
