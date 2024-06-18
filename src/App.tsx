import { useEffect } from "react";
import "./App.css";
import React from "react";
import { fetcher } from "./components/fetcher/fetcher";
import { useState } from "react";
import MovieList from "./components/MovieList/MovieList";

const apiKey = process.env.REACT_APP_API_KEY_2;
const url = "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50";
const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};

const defaultData = {
  docs: [
    {
      id: 1,
      poster: {
        url: "poster 2",
      },
      name: "Film 2",
      alternativeName: "Alternative film 2",
      rating: {
        kp: 8.23,
      },
      year: 2010,
    },
    {
      id: 2,
      poster: {
        url: "poster 1",
      },
      name: "Film 1",
      alternativeName: "Alternative film 1",
      rating: {
        kp: 8.23,
      },
      year: 2011,
    },
    {
      id: 3,
      poster: {
        url: "poster 3",
      },
      name: "Film 3",
      alternativeName: "Alternative film 3",
      rating: {
        kp: 8.23,
      },
      year: 2012,
    },
    {
      id: 4,
      poster: {
        url: "poster 4",
      },
      name: "Film 4",
      alternativeName: "Alternative film 4",
      rating: {
        kp: 8.23,
      },
      year: 2013,
    },
    {
      id: 5,
      poster: {
        url: "poster 5",
      },
      name: "Film 5",
      alternativeName: "Alternative film 5",
      rating: {
        kp: 8.23,
      },
      year: 2014,
    },
    {
      id: 6,
      poster: {
        url: "poster 6",
      },
      name: "Film 6",
      alternativeName: "Alternative film 6",
      rating: {
        kp: 8.23,
      },
      year: 2015,
    },
    {
      id: 7,
      poster: {
        url: "poster 7",
      },
      name: "Film 7",
      alternativeName: "Alternative film 7",
      rating: {
        kp: 8.23,
      },
      year: 2020,
    },
    {
      id: 8,
      poster: {
        url: "poster 8",
      },
      name: "Film 8",
      alternativeName: "Alternative film 8",
      rating: {
        kp: 8.23,
      },
      year: 2021,
    },
    {
      id: 9,
      poster: {
        url: "poster 9",
      },
      name: "Film 9",
      alternativeName: "Alternative film 9",
      rating: {
        kp: 8.23,
      },
      year: 2022,
    },
    {
      id: 10,
      poster: {
        url: "poster 10",
      },
      name: "Film 10",
      alternativeName: "Alternative film 10",
      rating: {
        kp: 8.23,
      },
      year: 2023,
    },
  ],
};

function App() {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getData = () => {
    const response = fetcher(url, options);
    setIsLoading(true);
    response.then((res) => {
      setIsLoading(false);
      setData(res);
    });
  };
  console.log(data);
  // useEffect(() => {

  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // console.log(data);

  return (
    <div className="App">
      <button onClick={getData}>get data from fetch</button>
      {!isLoading && <MovieList data={data} />}
    </div>
  );
}

export default App;
