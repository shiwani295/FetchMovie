import "./App.css";
import MovieList from "./component/MovieList";
import { useEffect, useState } from "react";
import Movie from "./component/Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviehandler() {
    setIsloading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/fils");
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }

      const data = await response.json();

      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }

  //eligant way to write code
  let content = <p>No Movies Found</p>;
  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <button className="fetchmovieButton" onClick={fetchMoviehandler}>
            Fetch Movie
          </button>
        </section>
        <section>{content}</section>
      </header>
    </div>
  );
}

export default App;
