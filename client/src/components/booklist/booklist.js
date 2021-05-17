import React, {useState} from 'react'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../notifications/Notification'
import Genre from '../Genre/Genre'
import fiction from '../images/finction.png'
import nonfiction from '../images/nonfiction.png'
import kids from '../images/kids.png'
import young from '../images/young.png'
import history from '../images/history.png'
import textbook from '../images/textbook.png'



const initialState = {
    searchterm:'',
    err: '',
    success: ''
}



function BookList() {


    const [search, setSearch] = useState(initialState)

    const {
        searchterm, err, success} = search

    const handleChangeInput = e => {
            const {name, value} = e.target
            setSearch({...search, [name]:value, err: '', success: ''})
           
        }
    const handleSubmit = async e => {
            e.preventDefault()
            
            try{
                const res = await axios.get('http://localhost:5000/book/search', {
                    params: {
                        searchterm:search.searchterm
                      }
               
                })
                
    
                setSearch({...search, err: '', success: res.data.msg})
               alert("Title: "  + res.data[0].title + "\n" +  "Condition: "+ res.data[0].condition + "\n" )
    
            }
            catch(err){
              err.response.data.msg && 
              setSearch({...search, err: err.response.data.msg, success: ''})
    
            }
        }

    return (
        <div>
            <div class = "navigationBar">
            <a  href='/'>Home</a>
         <a class="active" href='/booklist'>Library</a>
         <a href="/login">Login/Signup</a>
        <a href='/contact'>Contact Us</a>
        <a href="/about">About</a>
        </div>
            <div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
                <form onSubmit={handleSubmit}>
                    <input name="searchterm" type="text" value={searchterm} onChange={handleChangeInput}/> 
                    <input type="submit" value="Submit"/>
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
export default BookList;

