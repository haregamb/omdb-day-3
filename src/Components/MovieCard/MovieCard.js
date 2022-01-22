import React from 'react'
import '../MovieCard/MovieCard.css'
const MovieCard = ({title, type,posterUrl}) =>{
    return(

    <div id = 'card'>
         <img
            src={posterUrl}
            alt={`{title}poster`}/>
            <h2>{title}</h2>
            <span>{type}</span>
    </div>
    )
}
export default MovieCard;