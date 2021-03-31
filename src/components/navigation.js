import React, {Component} from 'react'

class Navigation extends Component{
    render() {
        return (
            
            <div class="topnav">
            <a class="active" href="/">Home</a>
            <a href="#news">News</a>
            <a href="/login">Login</a>
            <a href="#about">About</a>
            
          </div>
        )
    }
}
export default Navigation;
