import React from "react";
import { Link, useLocation } from "react-router-dom";

const FilmDetails = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);

  const { poster, alternativeName, name, description, rating, year, genres } =
    data;

  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div>
        <img src={poster?.url} alt="Постер не доступен" />
      </div>
      <div>{name ?? alternativeName}</div>
      <div>Рейтинг Кинопоиск: {rating?.kp}</div>
      <div>Год выпуска: {year}</div>
      <div>Жанры: {genres?.map((value) => value.name)}</div>
      <div>{description}</div>
    </div>
  );
};
export { FilmDetails };
