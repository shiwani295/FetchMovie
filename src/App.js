import "./App.css";
import MovieList from "./component/MovieList";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  async function fetchMoviehandler() {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    setMovies(data.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <button className="fetchmovieButton" onClick={fetchMoviehandler}>
            Fetch Movie
          </button>
        </section>
        <section>
          <MovieList movies={movies} />
        </section>
      </header>
    </div>
  );
}

export default App;
