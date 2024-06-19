import React from "react";

const FilmDetails = (props) => {
  const { data } = props;
  const { poster, alternativeName, name, description, rating, year, genres } =
    data;

  return (
    <div>
      <div>
        <img src={poster?.url} alt="Постер не доступен" />
      </div>
      <div>{name ?? alternativeName}</div>
      <div>Рейтинг Кинопоиск: {rating.kp}</div>
      <div>Год выпуска: {year}</div>
      <div>Жанры: {genres.map((value) => value.name)}</div>
      <div>{description}</div>
    </div>
  );
};
export default FilmDetails;
