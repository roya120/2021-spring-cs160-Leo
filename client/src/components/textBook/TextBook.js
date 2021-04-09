import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './textBook.css'
import linear from '../images/linear.png'


function TextBook(){
    return(

        <div>
         <div class="events">


<div class="event-row">
  
  <img class="first-event" src={linear} alt = "first-event"></img>
  <h3>Linear Algebra</h3>
             <p>Text book</p> <br></br>
               <a href="#" class="myButton">checkout</a>

</div>
<hr></hr>

<div class="event-row">
<img class="first-event" src={linear} alt = "first-event"></img>
  <h3>Linear Algebra</h3>
             <p>Text book</p> <br></br>
               <a href="#" class="myButton">checkout</a>
</div>



 <hr></hr>

 <div class="event-row">
 <img class="first-event" src={linear} alt = "first-event"></img>
  <h3>Linear Algebra</h3>
             <p>Text book</p> <br></br>
               <a href="#" class="myButton">checkout</a>
 </div>

 <hr></hr>

 <div class="event-row">
 <img class="first-event" src={linear} alt = "first-event"></img>
  <h3>Linear Algebra</h3>
             <p>Text book</p> <br></br>
               <a href="#" class="myButton">checkout</a>
 </div>


 <hr></hr>

 <div class="event-row">
 <img class="first-event" src={linear} alt = "first-event"></img>
  <h3>Linear Algebra</h3>
             <p>Text book</p> <br></br>
               <a href="#" class="myButton">checkout</a>
 </div>


</div>


    </div>

)



}
export default TextBook