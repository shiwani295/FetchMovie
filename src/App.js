import "./App.css";
import MovieList from "./component/MovieList";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  async function fetchMoviehandler() {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    setIsloading(true);
    setTimeout(() => {
      setMovies(data.results);
      setIsloading(false);
    }, 3000);
  }

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <ReactLoading />
        ) : (
          <button className="fetchmovieButton" onClick={fetchMoviehandler}>
            Fetch Movie
          </button>
        )}
        <section>
          <MovieList movies={movies} />
        </section>
      </header>
    </div>
  );
}

export default App;
