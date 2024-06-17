import React, { useState } from "react";
import Slider from "../Slider/Slider";
import { fetcher } from "../fetcher/fetcher";

const apiKey = process.env.REACT_APP_API_KEY;
const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};

const YearFilter = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const year = new Date().getFullYear();
  const { setCurrentMovieList } = props;
  const [value, setValue] = useState<number[]>([1990, year]);
  const url = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&year${value[0]}-${value[1]}`;
  const response = fetcher(url, options);
  setIsLoading(true);
  response.then((response) => {
    setIsLoading(false);
    setCurrentMovieList(response);
  });

  return (
    <div>
      {!isLoading && <Slider value={value} setValue={setValue} year={year} />}
    </div>
  );
};

export default YearFilter;
