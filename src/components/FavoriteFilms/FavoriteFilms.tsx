import React, { useState } from "react";
import { useEffect } from "react";
import { fetcher } from "../fetcher/fetcher";
import Card from "../Card/Card";

const apiKey = process.env.REACT_APP_API_KEY;

const defaultUrl = "https://api.kinopoisk.dev/v1.4/movie?";

const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};

const FavoriteFilms = () => {
  const favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms"));
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieList, setMovieList] = useState({ docs: [] });
  const buildUrl = () => {
    const idString = favoriteFilms.reduce((urlId: string, id: number) => {
      return urlId.concat(`&id=${id}`);
    }, "");
    return defaultUrl + idString;
  };

  const getFilms = () => {
    const url = buildUrl();
    const response = fetcher(url, options);
    setIsLoading(true);
    response.then((res) => {
      setIsLoading(false);
      setMovieList(res);
      console.log(res);
    });
  };

  const renderMovieList = () => {
    switch (true) {
      case isLoading: {
        return <div>Загрузка...</div>;
      }
      default: {
        return movieList.docs.map((value: any) => (
          <Card data={value} key={value.id} />
        ));
      }
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={getFilms}>Get films</button>
      {renderMovieList()}
    </div>
  );
};

export default FavoriteFilms;
