import React from 'react'
import "./App.css";
import MovieCard from "./Components/MovieCard/MovieCard";
 import MovieDetails from './Components/MovieDetail/MovieDetail.js';
import { getMovieDetailsById, getMoviesBySearchTerm } from "./utils/Utils";

function App() {
  let movieData = {};
  let movieDataa = {};
  let isMovieData = false;
  let isMovieDataa = false;

  window.onload = async () => {
    const movieAPI = await getMovieDetailsById("tt2975590");
    sessionStorage.setItem("movieData", JSON.stringify(movieAPI));
  };
  if (sessionStorage.getItem("movieData")) {
    movieData = JSON.parse(sessionStorage.getItem("movieData"));
    isMovieData = true;
  }
  // window.onload = async () => {
  //   const movieAPITerm = await getMoviesBySearchTerm("spiderman");
  //   sessionStorage.setItem("movieDataa", JSON.stringify(movieAPITerm));
  // };
  // if (sessionStorage.getItem("movieDataa")) {
  //   movieDataa = JSON.parse(sessionStorage.getItem("movieDataa"));
  //   isMovieDataa = true;
  // }

  console.log(movieData);
  
  return (
    <div className="App">
      {isMovieData ? ( 
         <MovieCard
          title={movieData.Title}
          type={movieData.Type}
          posterUrl={movieData.Poster}
        />
      ) : (
        "Please refresh" 
       )}
      {isMovieData ? (
        <MovieDetails
          title={movieData.Title}
          rated={movieData.Type}
          posterUrl={movieData.Poster}
          runtime={movieData.Runtime}
          genre={movieData.Genre}
          plot={movieData.Plot}
          actors={movieData.Actors}
          rating={movieData.imdbRating}
          rated={movieData.Rated}
        /> 
      ) : (
        "Please refresh"
      )}

    </div>
  );
}

export default App;