import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './club.css'
import club2 from '../images/club2.png'



function Club(){

return(
<div> 


<div class="navigationBar20">
    <div class="dropdown20">
    <a class="active" href="library.html">Library</a>
    <div class="dropdown-content20">

    <a href="library.html">catalog</a>
      <a href="#">bookclub</a>
      <a href="#">About</a>
    </div>
    </div>

    <a href="user.html">User Account</a>
    <a href="contact.html">Contact Us</a>
    <a href="#">Volunteer</a>
    <a class="logout2" href="index.html">Logout</a>
  </div>

  <div class="image-div20">
      <img class ="image20" src={club2}/>
  </div>

  <div class = "text20">

    <div class = "paragraph20">

    <p> Here you can join the bookclubs available</p>
    <br></br>
    <p> Do not see your book in the listing? Don't worry, Request one! </p>

      </div>

  </div>


  <div class="container20">
  <form >
    <div class="row0">
      <div class="col-250">
        <label for="fname">First Name</label>
      </div>
      <div class="col-750">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div class="row0">
      <div class="col-250">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-750">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    <div class="row0">
      <div class="col-250">
        <label for="Book">Book</label>
      </div>
      <div class="col-750">
        <select id="Book" name="Book">
            <option value="choose">choose</option>
          <option value="option1">Option1</option>
          <option value="option2">Option2</option>
          <option value="option3">Option3</option>
        </select>
      </div>
    </div>
    <div class="row0">
      <div class="col-250">
        <label for="subject">Note(optional)</label>
      </div>
      <div class="col-750">
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
      </div>
    </div>
    <div class="row0">
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>



</div>


)

}

export default Club