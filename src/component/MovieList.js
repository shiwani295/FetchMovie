import React from "react";
import AddMovies from "./AddMovieForm/AddMovies";
import "./MovieList.css";

const MovieList = (props) => {
  return (
    <>
      <AddMovies />
      {props.movies.map((data) => {
        return (
          <div className="card">
            <p key={data.episode_id} className="title">
              {data.title}
            </p>
            <p> {data.opening_crawl}</p>
            <p className="dates"> {data.release_date}</p>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
//
