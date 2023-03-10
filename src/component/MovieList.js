import React from "react";

import AddMovies from "./AddMovieForm/AddMovies";
import "./MovieList.css";

const MovieList = (props) => {
  function AddMovieHandler(movie) {
    props.addMovie(movie);
  }
  async function DeleteHandler(movieID) {
    props.deleteMovie(movieID);
  }

  return (
    <>
      <AddMovies addMovie={AddMovieHandler} />
      <section>
        {props.movies.map((data) => {
          return (
            <div className="card" id={data.id}>
              <p className="title">{data.title}</p>
              <p> {data.opnText}</p>
              <p className="dates"> {data.realeaseDate}</p>
              <button onClick={() => DeleteHandler(data.id)}>Delete</button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MovieList;
