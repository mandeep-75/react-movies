import { useEffect, useState } from "react";
import "./Body.css";
import SearchIcon from "../assets/search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=3a5fa550";

const Body = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    //  searchMovies("lucifer");
    vidsrcCatalog();
  }, []);

  const vidsrcCatalog = async () => {
    const response = await fetch(
      `https://vidsrc.xyz/movies/latest/page-1.json`
    );
    const data = await response.json();
    console.log(data);
    setMovies(data);
  };
  // learn react router. To make home page with vidsrc latest movies catalogs.

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };
  // move fetching req to App.jsx for easy managing

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
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
          onClick={() => searchMovies(searchTerm)}
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
          <h2>No movies found for given query</h2>
        </div>
      )}
    </div>
  );
};

export default Body;
