import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './addBook.css'
import {showErrMsg, showSuccessMsg} from '../notifications/Notification'

const initialState = {
    title: '',
    authors: [],
    genres: [],
    zipcode:'',
    owner:'',
    condition:'',
    err: '',
    success: ''
}

const isEmpty = value => {
    if(!value) return true
     return false
}

function AddBook(){

    const [book, setBook] = useState(initialState)

    const {
      title,
      authors,
      genres,
      zipcode,
      owner,
      condition, err, success} = book

    const handleChangeInput = e => {
        const {name, value} = e.target
        setBook({...book, [name]:value, err: '', success: ''})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(title) || isEmpty(authors) || isEmpty(condition) || isEmpty(zipcode) || isEmpty(genres))
                return setBook({...book, err: "Please fill in all fields.", success: ''})

        try{
            const res = await axios.post('http://localhost:5000/book/add', {
              title,
              authors,
              genres,
              zipcode,
              owner,
              condition
            })

            setBook({...book, err: '', success: res.data.msg})
            
        }
        catch(err){
          err.response.data.msg && 
          setBook({...book, err: err.response.data.msg, success: ''})

        }
    }

return(
<div>

<div class="navigationBar20">
   
<a href="/loggedIn">Home</a>
       <a href="/loggedBooklist">Library</a>
       <a href="/account">User Account</a>
  
      <a href="/loggedVolunteer">Volunteer</a>
   <a class= "LogoutLeft" href="/">LogOut</a>
 </div>
 <div class ="information">
 {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
   <p>Thank you for sharing your book!</p>
   <p>Please fill out the following form to add your book to our listing.</p>
   <p>If you need help filling out this form please <a href="/contact">Contact Us.</a></p>
 </div>



<div class="container">
<form action ='/' onSubmit={handleSubmit}>  
<label for="BookeTitle">Book Title</label>
        <br></br>
        <input type="text" id="title" name="title" 
             value={title} onChange={handleChangeInput} placeholder="Book Title.."/>
          <br></br>

          <label for="Author">Author's name</label>
          <br></br>
          <input type="text" id="author" name="author" 
                onChange={handleChangeInput} placeholder="Author.."/>
          <br></br>

          <label for="owner">Email</label>
          <br></br>
          <input type="text" id="owner" name="owner" 
                onChange={handleChangeInput} placeholder="Email.."/>
          <br></br>

        <label for="genres">Genres</label>
          <br></br>
          <select id="genres" name="genres" value={genres} onChange={handleChangeInput} >
          <option value="select...">Select...</option>
          <option value="Fiction">Fiction</option>
          <option value="non-fiction">Non-fiction</option>
          <option value="Teen">Teen</option>
          <option value="Kids">Kids</option>
          <option value="History">History</option>
          <option value="Textbook">Textbook</option>
          <option value="Other">Other</option>
        </select>
        <br></br>
          <label for="conditions">Conditions</label>
          <br></br>
          <select id="condition" name="condition" value={condition} onChange={handleChangeInput} >
          <option value="select...">Select...</option>
          <option value="As new">As new</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Acceptable">Acceptable</option>
        </select>
        
  <br></br>
  <label for="zipcode">Zipcode</label>
        <br></br>
        <input type="text" id="zipcode" name="zipcode" 
             value={zipcode} onChange={handleChangeInput} placeholder="Zipcode"/>
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