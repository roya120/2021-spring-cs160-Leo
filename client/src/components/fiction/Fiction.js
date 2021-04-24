import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './fiction.css'
import summer from '../images/summer.png'



function Fiction(){
return(
    <div>
   <div class="events">


<div class="event-row">
<img class="first-event" src={summer} alt = "event"></img>
  <h3>Anything is possible</h3>
  <p>Anything Is Possible is a 2017 novel of related short stories by the American author Elizabeth Strout.
     The novel returns to the fictional rural town of Amgash, Illinois. </p> <br></br>
    <a href="#" class="myButton">checkout</a>


     </div>
<hr></hr>

<div class="event-row">
             
             <img class="first-event" src={summer} alt = "event"></img>
             <h3>Summertime</h3>
             <p>Anything Is Possible is a 2017 novel of related short stories by the American author Elizabeth Strout.
                The novel returns to the fictional rural town of Amgash, Illinois. </p> <br></br>
               <a href="#" class="myButton">checkout</a>
           </div>
           <hr></hr>

<div class="event-row">
<img class="first-event" src={summer} alt = "event"></img>
  <h3>Summertime</h3>
  <p>Anything Is Possible is a 2017 novel of related short stories by the American author Elizabeth Strout.
     The novel returns to the fictional rural town of Amgash, Illinois. </p> <br></br>
    <a href="#" class="myButton">checkout</a>
</div>

<hr></hr>

            <div class="event-row">
            <img class="first-event" src={summer} alt = "event"></img>
              <h3>Summertime</h3>
              <p>Anything Is Possible is a 2017 novel of related short stories by the American author Elizabeth Strout.
                 The novel returns to the fictional rural town of Amgash, Illinois. </p> <br></br>
                <a href="#" class="myButton">checkout</a>
            </div>

            <hr></hr>

<div class="event-row">
<img class="first-event" src={summer} alt = "event"></img>
  <h3>Summertime</h3>
  <p>Anything Is Possible is a 2017 novel of related short stories by the American author Elizabeth Strout.
     The novel returns to the fictional rural town of Amgash, Illinois. </p> <br></br>
    <a href="#" class="myButton">checkout</a>
</div>


</div>













    </div>
















)












}
export default Fiction