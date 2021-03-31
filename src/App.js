import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import Navigation from './components/navigation';



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
          </Switch>
      
          </div>
          
          </BrowserRouter>
    </div>
    
  );
}

export default App;
