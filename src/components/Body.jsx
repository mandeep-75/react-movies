import { useState } from "react";
import "./Body.css";
import SearchIcon from "../assets/search.svg";
import MovieCard from "./MovieCard";

const Body = ({ searchMovies, movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // learn react router. To make home page with vidsrc latest movies catalogs.
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(e.keyCode);
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1>movies and series</h1>
      <div className="search">
        <input
          placeholder="Search for a movies or web-series"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
            console.log(" searchTerm :", searchTerm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies/series found for given query</h2>
        </div>
      )}
    </div>
  );
};

export default Body;
