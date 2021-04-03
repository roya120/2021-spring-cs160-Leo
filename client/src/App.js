import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './components/about/aboutUs';
import BookList from './components/booklist/booklist';
import Contact from './components/contact/contact';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register'

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
              <Route exact path ="/contact" component ={Contact}/>   
              <Route exact path ="/about" component ={About}/> 
              <Route exact path = "/booklist" component = {BookList}/>
          </Switch>
          </div>
          
          </BrowserRouter>
    </div>
    
  );
}

export default App;
