import React from "react";
import styles from "./Card.module.css";
// type CardProps = {
//   poster: URL;

//   //TODO: Написать типы
// };

const Card = (props: any) => {
  const { data } = props;
  console.log("Data", data);
  const { poster, name, alternativeName, rating, year } = data;
  return (
    <div className={styles.card}>
      <img className={styles.poster} src={poster?.url} alt={alternativeName} />
      <div className={styles.title}>{name ?? alternativeName}</div>
      <div className={styles.rating}>Кинопоиск: {rating?.kp}</div>
      <div className={styles.year}>Год выпуска: {year}</div>
    </div>
  );
};

export default Card;
