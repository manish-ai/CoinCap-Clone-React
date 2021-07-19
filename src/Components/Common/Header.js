import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand"> WOOKIE MOVIES</a>
      <form class="form-inline">
        <span type="submit">
          <img src="https://img.icons8.com/windows/32/000000/search--v2.png" />
        </span>
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </nav>
  );
};

export default Header;
