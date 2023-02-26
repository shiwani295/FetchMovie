import "./App.css";
import MovieList from "./component/MovieList";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
      const data = await response.json();

      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  //eligant way to write code
  let content;
  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <section>{content}</section>
      </header>
    </div>
  );
}

export default App;
