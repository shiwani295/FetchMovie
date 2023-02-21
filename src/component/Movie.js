import React from "react";

const Movie = (props) => {
  //console.log(props);
  return (
    <ul>
      <li>{props.title}</li>
    </ul>
  );
};

export default Movie;
