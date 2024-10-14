import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie ,edittask,setedittask}) => {
  var url = "";
  if (movie.Type === "series") {
    url = "https://vidsrc.xyz/embed/tv?imdb=";
  } else {
    url = "https://vidsrc.xyz/embed/movie?imdb=";
  }
  return (
    <> <div
    onClick={() => window.open(`${url}${movie.imdbID}`, "_blank")}
    className="movie"
  >
    <div>
      <p>{movie.Year}</p>
    </div>
    <div>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />
    </div>
    <div>
      <h2>{movie.Type}</h2>
      <h3>{movie.Title}</h3>
     
    </div>
  </div>
  <button onClick={()=>setedittask(movie.imdbID)}>test</button></>
   
  );
};

export default MovieCard;
