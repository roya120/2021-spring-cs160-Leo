import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './club.css'
import club2 from '../images/club2.png'



function Club(){

return(
<div> 

  
    <div class="navigationBar11">
    
    <a  href='/'>Home</a>
    

    <a href="/home">catalog</a>
      

    <a href="/login">User Account</a>
    <a href="/contact">Contact Us</a>
    <a href="#">Volunteer</a>
    
  </div>

  <div class="image-div11">
      <img class ="image11" src={club2}/>
  </div>

  <div class = "text">

    <div class = "paragraph">

    <p> Here you can join the bookclubs available</p>
    <br></br>
    <p> Do not see your book in the listing? Don't worry, Request one! </p>

      </div>

  </div>


  <div class="container11">
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


      <div class="row0">
      <div class="col-250">
        <label for="Email">Email</label>
      </div>
      <div class="col-750">
        <input type="text" id="email" name="Email" placeholder="Your email.."/>
      </div>
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