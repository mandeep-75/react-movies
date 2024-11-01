import { useState } from "react";
import "./Body.css";
import SearchIcon from "../assets/search.svg";
import MovieCard from "./MovieCard";

const Body = ({ searchMovies, movies, loadMore, loadNeed }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDone, setSearchDone] = useState(false);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchMovies(searchTerm);
      setSearchDone(true);
    }
  };

  const handleSearch = () => {
    if (searchTerm !== "") {
      searchMovies(searchTerm);
      setSearchDone(true);
    }
    {
      console.log("lol-error");
    }
  };

  return (
    <div className="app">
      <h1>Movies and Series</h1>
      <div className="search">
        <input
          placeholder="Search for a movie or web series"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img src={SearchIcon} alt="search" onClick={handleSearch} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        searchDone && (
          <div className="empty">
            <h2>No movies/series found for the given query</h2>
          </div>
        )
      )}

      {loadNeed && (
        <button
          id="myButton"
          className="load-button"
          onClick={() => loadMore(searchTerm)}
        >
          Load More Content
        </button>
      )}
    </div>
  );
};

export default Body;
