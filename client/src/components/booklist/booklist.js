import React from "react";
import Genre from '../Genre/Genre'
import fiction from '../images/finction.png'
import nonfiction from '../images/nonfiction.png'
import kids from '../images/kids.png'
import young from '../images/young.png'
import history from '../images/history.png'
import textbook from '../images/textbook.png'

function BookList() {
    return (
        <div>
            <div class = "navigationBar">
            <a  href='/'>Home</a>
         <a class="active" href='/booklist'>Library</a>
         <a href="/login">Login/Signup</a>
        <a href='/contact'>Contact Us</a>
        <a href="/about">About</a>
        </div>
            <form id = "searchForm">
                    <input type = "search " id = "query" placeholder = "Search..."/>
                        <button > Search</button>
                 </form>
            
        <div className="genreList">

                <Genre className="Fiction" imgSrc={fiction} genreName="Fiction" genreDetails="Fictional stories" itemsLink=""></Genre>
                
                <Genre className="NonFiction" imgSrc={nonfiction} genreName="Non Fiction" genreDetails="Non-Fictional stories" itemsLink=""></Genre>
                
                <Genre className="Kids" imgSrc={kids} genreName="Kids" genreDetails="Stories for kids" itemsLink=""></Genre>
                
                <Genre className="History" imgSrc={history} genreName="History" genreDetails="History books" itemsLink=""></Genre>
                
                <Genre className="Textbooks" imgSrc={textbook} genreName="Textbooks" genreDetails="Textbook for college students" itemsLink=""></Genre>
                
                <Genre className="Young" imgSrc={young} genreName="Young Adults" genreDetails="Stories for young adults" itemsLink=""></Genre>
                
        </div>

        </div>
    );

}
export default BookList;

