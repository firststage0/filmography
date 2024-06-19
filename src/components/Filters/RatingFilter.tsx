import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import { fetcher } from "../fetcher/fetcher";

const apiKey = process.env.REACT_APP_API_KEY_2;
const url = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50`;
const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};
const min = 0;
const max = 10;
const RatingFilter = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setCurrentMovieList } = props;

  const [value, setValue] = useState<number[]>([min, max]);

  const setFilter = () => {
    const localUrl =
      value[0] === value[1]
        ? `${url}&rating.kp=${value[0]}`
        : `${url}&rating.kp=${value[0]}-${value[1]}`;
    console.log(localUrl);

    // const response = fetcher(localUrl, options);
    // setIsLoading(true);
    // response.then((res) => {
    //   setIsLoading(false);
    //   setCurrentMovieList(res);
    // });
  };

  return (
    <div>
      {!isLoading && (
        <Slider value={value} setValue={setValue} min={min} max={max} />
      )}
      <button onClick={setFilter}>Filter</button>
    </div>
  );
};

export default RatingFilter;
