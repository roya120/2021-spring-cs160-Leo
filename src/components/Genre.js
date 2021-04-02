import React from "react";
import '../CSS/Genre.css'

class Genre extends React.Component{

 render(){
   return(
     <div className = "genres">
       <img className = "genrePicture" src = {this.props.imgSrc}/>
       <h1 className = "genreName"> {this.props.genreName} </h1>
       <p> {this.props.genreDetails} </p>
       <a href = {this.props.itemsLink}> View Items </a>
     </div>
   );
 }

}

export default Genre;
