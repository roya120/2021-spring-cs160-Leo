
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './loggedIn.css'
import history from '../images/history.png'
import catalog from '../images/catalog.png'
import bookclub from '../images/book-club.png'




function LoggedIn() {
    return (
        <div>
     <div class="navigationBar2">
    <div class="dropdown2">
    <a class="active" href="library.html">Library</a>
    <div class="dropdown-content2">

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
    
  <div class="top-container">

    <h1>Welcome user to bookey.</h1>
    <p> Here you can borrow and lend your books! </p>

     </div>

       
        <div class = "category">


<div class="boxes">

  <div class="catagories">
  <img class = "image-container" src = {catalog} alt = "catalog" />

          <br></br>
          <br></br>
          <br></br>
          <br></br>

               <h3>View Our Catalog</h3>

               <br></br>
             

               <p>Some text about the category.</p>
                 <a href="library.html">View Items</a><p></p>
                 </div>

                 <div class="adding">

                
                 <img class = "image-container" src = {history} alt = "adding" height="8%" width="50%"/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>Add a Book to Bookey</h3>
          <br></br>
          <p>Some text about the category.</p>
                 <a href="add.html">View Items</a><p></p>

                 </div>
         <div class="join">

         <img class = "image-container"  src={bookclub} alt="join" />
         <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>Join the BookClub</h3>
          <br></br>
          <p>Some text about the category.</p>
         <a href="club.html">View Items</a><p></p>
         </div>
</div>
</div>
        </div>
        
    )
}
export default LoggedIn


