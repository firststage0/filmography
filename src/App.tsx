import "./App.css";
import React from "react";

import MovieList from "./components/MovieList/MovieList";
import { Routes, Route } from "react-router-dom";
import { FilmDetails } from "./components/FilmDetails/FilmDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/filmdetails" element={<FilmDetails />} />
    </Routes>
  );
}

export default App;
