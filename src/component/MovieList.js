import React from "react";
import AddMovies from "./AddMovieForm/AddMovies";
import "./MovieList.css";

const MovieList = (props) => {
  // function AddMoviesForm(e) {
  //   e.preventDefault();
  //   // const reftitle = useRef(null);
  //   // const refopnText = useRef(null);
  //   // const refDate = useRef(null);
  //   const data = {
  //     title: e.target.title.value,
  //     opnText: e.target.opnText.value,
  //     Reldate: e.target.Reldate.value,
  //   };
  //   //props.addMovie(data);
  //   console.log(data);
  //   e.target.title.value = "";
  //   e.target.opnText.value = "";
  //   e.target.Reldate.value = "";
  // }

  // function AddList(props) {
  //   const data = {
  //     title: props.title,
  //     opnText: props.opn,
  //     Reldate: props.date,
  //   };
  //   console.log(data.title);
  // }

  return (
    <>
      {/* <AddMovies addMovie={AddList} /> */}
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
