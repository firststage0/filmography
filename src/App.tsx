import "./App.css";
import React from "react";

import MovieList from "./components/MovieList/MovieList";
import { Router, Route } from "react-router";

function App() {
  return <div className="App">{<MovieList />}</div>;
}

export default App;
