import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState, React } from "react";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
export default function App() {
  const [pageNumber, setPagenumber] = useState(2);
  const [movies, setMovies] = useState([]);
  const [loadNeed, setloadNeed] = useState(false);
  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=3a5fa550";

  //api is free.So not need to hide it form others.

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    if (response.Response === "False" && data.Error === "Movie not found!") {
      setloadNeed(false);
    } else {
      setloadNeed(true);
      const data = await response.json();
      setMovies(data.Search);
    }
  };
  const loadMore = async (title) => {
    if (title !== "") {
      document.getElementById("myButton").textContent = "Load More Content";
      try {
        const response = await fetch(
          `${API_URL}&s=${title}&page=${pageNumber}`
        );

        const data = await response.json();

        if (data.Response === "False" && data.Error === "Movie not found!") {
          document.getElementById("myButton").textContent =
            "No additional Movies found";
        } else {
          const combinedMovies = [...(movies || []), ...(data.Search || [])];
          setPagenumber(pageNumber + 1);
          console.log("Page:", pageNumber);
          setMovies(combinedMovies);
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    } else {
      console.log("empty-query");
    }
  };

  return (
    <div>
      <Header />
      <Body
        searchMovies={searchMovies}
        movies={movies}
        loadMore={loadMore}
        loadNeed={loadNeed}
        setloadNeed={setloadNeed}
      />

      <Footer />
      <SpeedInsights />
    </div>
  );
}
