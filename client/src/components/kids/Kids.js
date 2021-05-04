import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './kids.css'
import angry from '../images/angry.png'


function Kids(){
    return(

        <div>
         <div class="events">


<div class="event-row">
  
  <img class="first-event" src={angry} alt = "first-event"></img>
  <h3>When I am Angry</h3>
             <p>children book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>

</div>
<hr></hr>

<div class="event-row">
<img class="first-event" src={angry} alt = "first-event"></img>
<h3>When I am Angry</h3>
             <p>children book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>
</div>



 <hr></hr>

 <div class="event-row">
 <img class="first-event" src={angry} alt = "first-event"></img>
 <h3>When I am Angry</h3>
             <p>children book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>
 </div>

 <hr></hr>

 <div class="event-row">
 <img class="first-event" src={angry} alt = "first-event"></img>
 <h3>When I am Angry</h3>
             <p>children book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>
 </div>


 <hr></hr>

 <div class="event-row">
 <img class="first-event" src={angry} alt = "first-event"></img>
 <h3>When I am Angry</h3>
             <p>children book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>
 </div>


</div>


    </div>

)



}
export default Kids