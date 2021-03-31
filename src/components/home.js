import React, {Component} from 'react'
import mainpage from './images/mainpage.png'
import catalog from './images/catalog.png'
import bookclub from './images/book-club.png'




class Home extends Component{
render() {
    return (
        <div>
        <div class = "navigationBar">
             <a class="active" href="library.html">Library</a>
             <a href="/register">Login/Signup</a>
            <a href="contact.html">Contact Us</a>
            <a href="#about">About</a>
        </div>
        <div class = "welcomeLibrary">
        <h1><b>Welcome to Bookey</b></h1>
        </div>
        <div>
        <img src = {mainpage} alt = "mainpage" height="8%" width="50%"/>
        </div><br></br><br></br>

        <div class = "events">
        <div class="event-row">
            <img src={catalog} alt = "catalog"></img>
            <h3>Library Catalog</h3>
            <p>We offer variety of books that can be picked up or delivered to you. </p>
            </div><br></br><br></br>
            <div class = "event-row">
                <img src = {bookclub} alt = "event"></img> 
                <h3>Book Club</h3>
                <p>Here you can sign up for any book club you are intersted in.</p>

            </div>
        </div>

        
        
        </div>
        

    )
}
}
export default Home;