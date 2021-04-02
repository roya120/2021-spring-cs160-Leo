import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import BookList from "./components/booklist"
import Contact from "./components/contact"





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
              <Route exact path = "/booklist" component = {BookList}/>

          </Switch>
          </div>
          
          </BrowserRouter>
    </div>
    
  );
}

export default App;
