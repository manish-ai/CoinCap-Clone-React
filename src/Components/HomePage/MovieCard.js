import React from "react";

const MovieCard = ({ movie }) => {
  console.log(movie)
  return (
    <div class="card" style={{ width: "28%" }}>
      dfkjdhsj
      <img class="card-img-top" src={movie.backdrop} alt="C" />
    </div>
  );
};

export default MovieCard;
