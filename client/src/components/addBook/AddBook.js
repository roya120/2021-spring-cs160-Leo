import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './addBook.css'


function AddBook(){

return(
<div>

<div class="navigationBar20">
   
   <a href="/">Library</a>
   <a href="user.html">User Account</a>
   <a href="/contact">Contact Us</a>
   <a href="#">Volunteer</a>
   <a href="/">Logout</a>
 </div>
 <div class ="information">
   <p>Thank you for sharing your book!</p>
   <p>Please fill out the following form to add your book to our listing.</p>
   <p>If you need help filling out this form please <a href="/contact">Contact Us.</a></p>
 </div>



<div class="container">
<form> 
<label for="BookeTitle">Book Title</label>
        <br></br>
        <input type="text" id="BookeTitle" name="BookeTitle" placeholder="Book Title.."/>
          <br></br>

          <label for="Author">Author's name</label>
          <br></br>

          <input type="text" id="author" name="author" placeholder="Author.."/>
          <br></br>

        <label for="category">Category</label>
          <br></br>
          <select id="category" name="category">
          <option value="select...">Select...</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-fiction</option>
          <option value="Teen">Teen</option>
          <option value="Kids">Kids</option>
          <option value="History">History</option>
          <option value="Textbook">Textbook</option>
          <option value="Other">Other</option>
        </select>
          <br></br>
          <label for="Additional Note">Additional Note</label>
          <br></br>
        <textarea id="Additional Note" name="Additional Note" placeholder="Additional Note..."></textarea>
  <br></br>
        <input type="submit" value="Submit"/>
          <br></br>


</form>


    </div>


    <br></br>


</div>


)


}

export default AddBook