import React, {Component} from 'react'


class Library extends Component{

    handleSubmit = e =>{
        e.preventDefault();
        console.log('works')
    }
render() {
    return (
        <form action ="./login">
            <div class = "navigationBar">
             <a class="active" href='/library'>Library</a>
             <a  href='/'>Home</a>
             <a href="/register">Login/Signup</a>
            <a href='/contact'>Contact Us</a>
            <a href="#about">About</a>
        </div>
        </form>
    )
}
}
export default Library;