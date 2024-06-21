import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props: any) => {
  const { data } = props;
  const setActualPoster = () => {
    if (poster?.url) {
      return poster.url;
    }
    return "/no-poster.png";
  };

  const { poster, name, alternativeName, rating, year } = data;
  return (
    <Link
      style={{ textDecoration: "none" }}
      to="filmdetails"
      state={{ data: data }}
    >
      <div className={styles.card}>
        <div className={styles.movieInfo}>
          <div className={styles.filmContent}>
            <img
              className={styles.poster}
              src={setActualPoster()}
              alt={"No poster"}
            />
            <div className={styles.title}>{name ?? alternativeName}</div>
            <div className={styles.bottomBlock}>
              <div className={styles.rating}>Кинопоиск: {rating?.kp}</div>
              <div className={styles.year}>Год выпуска: {year}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
