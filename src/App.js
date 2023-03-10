import "./App.css";
import MovieList from "./component/MovieList";
import { useEffect, useState, useCallback, useRef } from "react";
//import AddMovies from "./component/AddMovieForm/AddMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      //const response = await fetch("https://swapi.dev/api/films");
      const response = await fetch(
        "https://react-project-39576-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
      const data = await response.json();

      const loadedMovie = [];
      //console.log(data);

      for (const key in data) {
        loadedMovie.push({
          id: key,
          title: data[key].title,
          opnText: data[key].opn,
          realeaseDate: data[key].date,
        });
      }

      //setIsloading(true);
      //setMovies(data.results);
      setMovies(loadedMovie);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  //////
  //connectto  and add the form movie into firebase
  async function AddMovies(movie) {
    const response = await fetch(
      "https://react-project-39576-default-rtdb.firebaseio.com//movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(response);
    const data = await response.json();
    //console.log(data);
  }

  ///delete data from database by ID
  async function deleteDataById(movieID) {
    const response = await fetch(
      `https://react-project-39576-default-rtdb.firebaseio.com/movies/${movieID}.json`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    // console.log(data);
  }

  //eligant way to write code
  let content;
  if (movies.length > 0) {
    content = (
      <MovieList
        movies={movies}
        addMovie={AddMovies}
        deleteMovie={deleteDataById}
      />
    );
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
        <section>{content}</section>
      </header>
    </div>
  );
}

export default App;
