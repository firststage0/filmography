import "./App.css";
import React from "react";

import MovieList from "./components/MovieList/MovieList";
import { Routes, Route } from "react-router-dom";
import { FilmDetails } from "./components/FilmDetails/FilmDetails";
import FavoriteFilms from "./components/FavoriteFilms/FavoriteFilms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/filmdetails" element={<FilmDetails />} />
      <Route path="favorites" element={<FavoriteFilms />} />
    </Routes>
  );
}

export default App;
