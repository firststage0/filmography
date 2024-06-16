import React from "react";
import styles from "./Card.module.css";
// type CardProps = {
//   poster: URL;

//   //TODO: Написать типы
// };

const Card = (props: any) => {
  const { data } = props;
  console.log("Data", data);

  return (
    <div className={styles.card}>
      <img className={styles.poster} src={data.poster.url} alt="Fores Gamp" />
      <div className={styles.title}>{data.name}</div>
      <div className={styles.rating}>Кинопоиск: {data.rating.kp}</div>
      <div className={styles.year}>Год выпуска: {data.year}</div>
    </div>
  );
};

export default Card;
