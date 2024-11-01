import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState, React } from "react";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
export default function App() {
  const pageNumber = 2;
  const [movies, setMovies] = useState([]);

  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=3a5fa550";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const response2 = await fetch(`${API_URL}&s=${title}&page=${pageNumber}`);
    const data = await response.json();
    const data2 = await response2.json();
    const combinedMovies = [...(data.Search || []), ...(data2.Search || [])];
    setMovies(combinedMovies);
  };

  return (
    <div>
      <Header />
      <Body searchMovies={searchMovies} movies={movies} />
      <Footer />
      <SpeedInsights />
    </div>
  );
}
