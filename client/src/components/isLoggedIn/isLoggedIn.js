import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './loggedIn.css'
import history from '../images/history.png'
import catalog from '../images/catalog.png'
import bookclub from '../images/book-club.png'




function LoggedIn() {
    return (
        <div class="loggedInClass">
     <div class="navigationBar20">
   
    <a href="/">Library</a>
   
    
    <a href="/account">User Account</a>
    <a href="/contact">Contact Us</a>
    <a href="/volunteer">Volunteer</a>
    <a href="/addBook">Add Book</a>
    <a href="">Logout</a>
  </div>
    
  <div class="top-container20">

    <h1>Welcome user to bookey.</h1>
    <p> Here you can borrow and lend your books! </p>

     </div>

       
        <div class = "category">


<div class="boxes">

  <div class="catagories">
  <img class = "image-container20" src = {catalog} alt = "catalog" />

          <br></br>
          <br></br>
          <br></br>
          <br></br>

               <h3>View Our Catalog</h3>

               <br></br>
             

               <p>Some text about the category.</p>
                 <a href="/booklist">View Items</a><p></p>
                 </div>

                 <div class="adding">

                
                 <img class = "image-container20" src = {history} alt = "adding" height="8%" width="50%"/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>Add a Book to Bookey</h3>
          <br></br>
          <p>Some text about the category.</p>
                 <a href="/addBook">View Items</a><p></p>

                 </div>
         <div class="join">

         <img class = "image-container20"  src={bookclub} alt="join" />
         <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>Join the BookClub</h3>
          <br></br>
          <p>Some text about the category.</p>
         <a href="/club">View Items</a><p></p>
         </div>
</div>
</div>
        </div>
        
    )
}
export default LoggedIn