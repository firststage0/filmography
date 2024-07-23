import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { markFavorite } from "../../functions/markFavorite";

const Card = (props: any) => {
  const { data } = props;
  const { id, poster, name, alternativeName, rating, year } = data;
  const [isActive, setIsActive] = useState<boolean>(false);

  const setActualPoster = () => {
    if (poster?.url) {
      return poster.url;
    }
    return "/no-poster.png";
  };

  useEffect(() => {
    const listOfFavorites = JSON.parse(localStorage.getItem("favoriteFilms"));
    if (listOfFavorites.includes(id)) {
      setIsActive(true);
    }
  }, []);

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
              <button
                className={styles.bookmarkButton}
                onClick={(e) => {
                  markFavorite(id);
                  setIsActive((prevState) => !prevState);
                  e.preventDefault();
                }}
              >
                <img
                  className={styles.bookmarkImg}
                  src={`${isActive ? "/bookmark-filled.png" : "/bookmark.png"}`}
                  alt=""
                />
              </button>
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
