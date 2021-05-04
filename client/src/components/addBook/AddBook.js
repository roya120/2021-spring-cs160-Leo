import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './addBook.css'

const initialState = {
    title: '',
    author: '',
    category: '',
    note:'',
    err: '',
    success: ''
}

const isEmpty = value => {
    if(!value) return true
     return false
}

function AddBook(){

    const [book, setBook] = useState(initialState)

    const {title, author, category, note, err, success} = book

    const handleChangeInput = e => {
        const {name, value} = e.target
        setBook({...book, [name]:value, err: '', success: ''})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(title) || isEmpty(author) || isEmpty(category))
                return setBook({...book, err: "Please fill in all fields.", success: ''})

        try{
            const res = await axios.post('http://localhost:5000/book/addBook', {
                title, author, category, note
            })

            setBook({...book, err: '', success: res.data.msg})
            
        }
        catch(err){
          console.log(err)

        }
    }

return(
<div>

<div class="navigationBar20">
   
   <a href="/">Library</a>
   <a href="user.html">User Account</a>
   <a href="/contact">Contact Us</a>
   <a href="#">Volunteer</a>
   <a class= "LogoutLeft" href="/">LogOut</a>
 </div>
 <div class ="information">
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
               value={author} onChange={handleChangeInput} placeholder="Author.."/>
          <br></br>

        <label for="category">Category</label>
          <br></br>
          <select id="category" name="category" value={category} onChange={handleChangeInput} >
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
          <label for= "note">Additional Note</label>
          <br></br>
        <textarea id="note"  name="note" placeholder="Additional Note..."
          value={note} onChange={handleChangeInput} />
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