import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './volunteer.css'




function loggedVolunteer(){
    return(
        <div>

<div class="navigationBar20">
   
     <a href="/loggedIn">Home</a>
    <a href="/loggedBooklist">Library</a>
    <a href="/account">User Account</a>
  
   <a class= "LogoutLeft" href="/">LogOut</a>
 </div>
 <div class="volunteer1">
 <h1>Volunteer Opportunities</h1>
 <p>You can help the community by delivering the books around your naighborhood</p>
 <p>This helps avoid unneccesary shippings and save more trees!</p>
    
 </div>
 <div class ="volunteerForm">
     <h3>Volunteer Form</h3>
 <form>
 <label for="fname">First name:</label><br></br>
 <input type="text" id="fname" name="fname"/><br></br>
  <label for="lname">Last name:</label><br></br>
  <input type="text" id="lname" name="lname"></input> <br></br>
  <label for="city">City:</label><br></br>
 <input type="text" id="city" name="city"/><br></br>
 <label for="zip">Zip Code:</label><br></br>
 <input type="text" id="zip" name="zip"/><br></br>
 <button type="submit" class="volunterB">Request</button>

     </form>

     

 </div>


 </div>



    )
}
export default loggedVolunteer;