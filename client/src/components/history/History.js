import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './history.css'
import cold from '../images/cold.png'


function History(){
    return(

        <div>
         <div class="events">


<div class="event-row">
  
  <img class="first-event" src={cold} alt = "first-event"></img>
  <h3>The Cold War</h3>
             <p>History book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>
</div>
<hr></hr>

<div class="event-row">
<img class="first-event" src={cold} alt = "first-event"></img>
<h3>The Cold War</h3>
             <p>History book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>
</div>



 <hr></hr>

 <div class="event-row">
 <img class="first-event" src={cold} alt = "first-event"></img>
 <h3>The Cold War</h3>
             <p>History book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>
 </div>

 <hr></hr>

 <div class="event-row">
 <img class="first-event" src={cold} alt = "first-event"></img>
 <h3>The Cold War</h3>
             <p>History book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>
 </div>


 <hr></hr>

 <div class="event-row">
 <img class="first-event" src={cold} alt = "first-event"></img>
 <h3>The Cold War</h3>
             <p>History book.</p> <br></br>
               <a href="#" class="myButton">checkout</a>
 </div>


</div>


    </div>

)



}
export default History