import React from "react";
import axios from 'axios'
import Genre from '../Genre/Genre'
import fiction from '../images/finction.png'
import nonfiction from '../images/nonfiction.png'
import kids from '../images/kids.png'
import young from '../images/young.png'
import history from '../images/history.png'
import textbook from '../images/textbook.png'


function loggedBooklist() {
    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:5000//user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
      }
    //render(){
    return (
        <div>
            <div class = "navigationBar">
            <a href="/loggedIn">Home</a>
       <a href="/loggedBooklist">Library</a>
       <a href="/account">User Account</a>
  
      <a href="/loggedVolunteer">Volunteer</a>
      <a class= "LogoutLeft" href="/" onClick={handleLogout} >LogOut</a>
        </div>
        <div class="search-container" >
            <form>
            <input type="text" placeholder="Find your book" name="search"/>
            <button type ="submit">Search</button>

            </form>

        </div>
           
            
        <div className="genreList">
        

                <Genre className="Fiction" imgSrc={fiction} genreName="Fiction" genreDetails="Fictional stories" itemsLink="/fiction"></Genre>
                
                <Genre className="NonFiction" imgSrc={nonfiction} genreName="Non Fiction" genreDetails="Non-Fictional stories" itemsLink="/nonfiction"></Genre>
                
                <Genre className="Kids" imgSrc={kids} genreName="Kids" genreDetails="Stories for kids" itemsLink="/kids"></Genre>
                
                <Genre className="History" imgSrc={history} genreName="History" genreDetails="History books" itemsLink="/history"></Genre>
                
                <Genre className="Textbooks" imgSrc={textbook} genreName="Textbooks" genreDetails="Textbook for college students" itemsLink="/textBook"></Genre>
                
                <Genre className="Young" imgSrc={young} genreName="Young Adults" genreDetails="Stories for young adults" itemsLink="/adults"></Genre>
                
        </div>

        </div>
    );
    // }

}
export default loggedBooklist;

