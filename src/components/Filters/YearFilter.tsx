import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import { fetcher } from "../fetcher/fetcher";

const apiKey = process.env.REACT_APP_API_KEY_2;
const url = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50`;
const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};
const year = new Date().getFullYear();
const YearFilter = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setCurrentMovieList } = props;

  const [value, setValue] = useState<number[]>([1990, year]);

  const setFilter = () => {
    const localUrl =
      value[0] === value[1]
        ? `${url}&year=${value[0]}`
        : `${url}&year=${value[0]}-${value[1]}`;
    const response = fetcher(localUrl, options);
    setIsLoading(true);
    response.then((res) => {
      setIsLoading(false);
      setCurrentMovieList(res);
    });
  };

  return (
    <div>
      {!isLoading && <Slider value={value} setValue={setValue} year={year} />}
      <button onClick={setFilter}>Filter</button>
    </div>
  );
};

export default YearFilter;
