import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import MovieCard from "./MovieCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [genresToDisplay, setgenres] = useState([]);

  const getMovies = () => {
    var config = {
      method: "get",
      url: "https://wookie.codesubmit.io/movies",
      headers: {
        Authorization: "Bearer Wookie2019"
      }
    };
    axios(config)
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  const getGenres = () => {
    let genres = [];
    movies.forEach((mov) => genres.push(...mov.genres));
    setgenres(removeDuplicates(genres));
  };

  const removeDuplicates = (arr) => {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    for (var key in obj) {
      ret_arr.push(key);
    }
    return ret_arr;
  };

  const displayMovies = (genre) => {
    movies.map((mov) => (
      <div class="card" style={{ width: "28%" }}>
        nidfhh
        <img class="card-img-top" src={mov.backdrop} alt="C" />
      </div>
    ));
  };

  return (
    <div>
      <Header />
      <div className="cardsContent">
        {genresToDisplay.map((gen) => (
          <>
            <h4 className="genreheader float-left">{gen}</h4>
            <div className="genreCards">{displayMovies(gen)}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
