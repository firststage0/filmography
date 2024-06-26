import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./FilmDetails.module.css";

const FilmDetails = () => {
  const location = useLocation();
  const { data } = location.state;

  const { poster, alternativeName, name, description, rating, year, genres } =
    data;

  const setActualPoster = () => {
    if (poster?.url) {
      return poster.url;
    }
    return "/no-poster.png";
  };



  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className={styles.container}>
        <div className={styles.info}>
          <img width={300} src={setActualPoster()} alt="no poster" />
          <div className={styles.posterImage}></div>
          <div className={styles.detailinfo}>
            <div className={styles.title}>{name ?? alternativeName}</div>
            <div className={styles.rating}>Рейтинг Кинопоиск: {rating?.kp}</div>
            <div className={styles.year}>Год выпуска: {year}</div>
            <div className={styles.genres}>
              Жанры:{" "}
              {genres?.map((value, id) => {
                if (id === genres.length - 1) return value.name;
                else return value.name.concat(", ");
              })}
            </div>
          </div>
        </div>
        {description}
      </div>
    </div>
  );
};
export { FilmDetails };
