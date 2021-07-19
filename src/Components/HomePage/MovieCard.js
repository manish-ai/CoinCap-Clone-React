import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div class="movieCard" style={{ width: "28%" }}>
      <img class="card-img-top" src={movie.backdrop} alt={movie.slug} />
    </div>
  );
};

export default MovieCard;
