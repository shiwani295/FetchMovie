import React, { useRef, useState } from "react";
import "./AddMovies.css";

const AddMovies = (props) => {
  //const [movieList, setMovieList] = useState("");
  const reftitle = useRef(null);
  const refopnText = useRef(null);
  const refDate = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const Allrefdata = {
      title: reftitle.current.value,
      opn: refopnText.current.value,
      date: refDate.current.value,
    };
    //props.addMovie(Allrefdata);
    console.log(Allrefdata);

    //setMovieList(Allrefdata);

    //const movieList = JSON.stringify(Allref);
    // setMovieList(movieList);
    //console.log(movieList);
    // reftitle.current.value = "";
    // refopnText.current.value = "";
    // refDate.current.value = "";
  };

  return (
    <>
      <section>
        <div className="AddMovieForm">
          <form onSubmit={handleSubmit}>
            <label for="title" className="formtitle">
              Title
            </label>
            <input type="text" id="titles" name="title" ref={reftitle} />

            <label for="opnText" className="opnText">
              Opening Text
            </label>
            <textarea
              type="text"
              id="opnText"
              name="opnText"
              ref={refopnText}
            ></textarea>

            <label for="Reldate" className="Reldate">
              Release Date
            </label>
            <input type="date" id="Reldate" name="Reldate" ref={refDate} />

            <button className="AddMovieBtn">Add Movies</button>
          </form>
        </div>
        <hr style={{ width: "19%", marginTop: "30px" }}></hr>
        <button className="AddMovieBtn">Fetch Movies</button>
      </section>
    </>
  );
};

export default AddMovies;
