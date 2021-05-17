
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import './loggedIn.css'
import history from '../images/history.png'
import catalog from '../images/catalog.png'
import bookclub from '../images/book-club.png'
import {showErrMsg, showSuccessMsg} from '../notifications/Notification'
import {fetchAllUsers, dispatchGetAllUsers} from '../../redux/actions/usersAction'

const initialState = {
  firstname: '',
  lastname: '',
  password:'',
  err: '',
  success: ''
}


function LoggedIn() {

  const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const users = useSelector(state => state.users)

    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const {firstname, lastname, password, err, success} = data
    const dispatch = useDispatch()
    const [callback, setCallback] = useState(false)

    useEffect(() => {
      if(isAdmin){
          fetchAllUsers(token).then(res =>{
              dispatch(dispatchGetAllUsers(res))
          })
      }
  },[token, isAdmin, dispatch, callback])


  const handleLogout = async () => {
    try {
        await axios.get('http://localhost:5000//user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/";
    } catch (err) {
        window.location.href = "/";
    }
  }
    return (
        <div class="loggedInClass">
     <div class="navigationBar20">
     <a href="/loggedIn">Home</a>
    <a href="/loggedBooklist">Library</a>
    <a href="/account">User Account</a>
  
    <a href="/loggedVolunteer">Volunteer</a>
    <a class= "LogoutLeft" href="/" onClick={handleLogout} >LogOut</a>
  </div>
    
  <div class="top-container20">

    <h1>Welcome {user.firstname} to bookey.</h1>
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