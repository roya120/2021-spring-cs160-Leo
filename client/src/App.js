import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './components/about/aboutUs';
import BookList from './components/booklist/booklist';
import LoggedBookList from './components/booklist/loggedBooklist';
import Contact from './components/contact/contact';
import LoggedContact from './components/contact/loggedContact';
import Home from './components/home/Home';
import Login from './components/login/Login';
import LoggedIn from './components/loggedIn/LoggedIn';
import AddBook from './components/addBook//AddBook'
import Club from './components/club/Club';
import LoggedClub from './components/club/loggedClub';
import Fiction from './components/fiction/Fiction';
import Nonfiction from './components/nonfiction/Nonfiction';
import Kids from './components/kids/Kids';
import History from './components/history/History';
import TextBook from './components/textBook/TextBook';
import Adults from './components/adults/Adults';
import Register from './components/register/Register'
import ActivationEmail from './components/auth/ActivationEmail'
import Account from './components/account/Account';
import LoggedAbout from './components/about/loggedAboutUs';
import LoggedVolunteer from './components/volunteer/loggedVolunteer';
import Volunteer from './components/volunteer/Volunteer';



function App() {
  return (
  
  <div className="App">
      
      <BrowserRouter>
      <div>
        {/* <Navigation/>  */}
        </div>
      
        <div >
          <Switch>
              <Route exact path ="/" component ={Home}/>   
              <Route exact path ="/login" component ={Login}/>     
              <Route exact path ="/register" component ={Register}/>   

              <Route exact path="/user/activate/:activation_token" component={ActivationEmail}  />
              
              <Route exact path ="/contact" component ={Contact}/>  
              <Route exact path ="/LoggedContact" component ={LoggedContact}/>
              <Route exact path ="/loggedIn" component ={LoggedIn}/> 
              <Route exact path ="/addBook" component ={AddBook}/>
              <Route exact path ="/club" component ={Club}/>
              <Route exact path ="/loggedClub" component ={LoggedClub}/>
              <Route exact path ="/about" component ={About}/> 
              <Route exact path ="/fiction" component ={Fiction}/> 
              <Route exact path ="/nonfiction" component ={Nonfiction}/> 
              <Route exact path ="/kids" component ={Kids}/>
              <Route exact path ="/history" component ={History}/>
              <Route exact path ="/textBook" component ={TextBook}/>
              <Route exact path ="/adults" component ={Adults}/>
              <Route exact path = "/booklist" component = {BookList}/>
              <Route exact path ="/account" component ={Account}/>
              <Route exact path ="/LoggedBooklist" component ={LoggedBookList}/>
              <Route exact path ="/Loggedabout" component ={LoggedAbout}/>
              <Route exact path ="/loggedvolunteer" component ={LoggedVolunteer}/>
              <Route exact path ="/volunteer" component ={Volunteer}/>
          </Switch>
          </div>
          
          </BrowserRouter>
    </div>
    
  );
}

export default App;
