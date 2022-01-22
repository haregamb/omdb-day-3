import React from 'react';
import '../MovieDetail/MovieDetail.css'
function MovieDetails({posterUrl, title, rated, runtime, genre, plote, actors, rating}) {
    return(
        <div className="container">
            <div>
                <img src={posterUrl} alt ={'{title}poster'}/>
            </div>
      <div className="textContainer">

      </div>

        </div>
    )

}
export default MovieDetails;