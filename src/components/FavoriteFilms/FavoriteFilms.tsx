import React, { useState } from "react";
import { useEffect } from "react";
import { fetcher } from "../fetcher/fetcher";
import Card from "../Card/Card";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;

const defaultUrl = "https://api.kinopoisk.dev/v1.4/movie?";

const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};

const FavoriteFilms = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieList, setMovieList] = useState({ docs: [] });

  const buildUrl = (favoriteFilms) => {
    const idString = favoriteFilms.reduce((urlId: string, id: number) => {
      return urlId.concat(`&id=${id}`);
    }, "");
    return defaultUrl + idString;
  };

  const getFilms = () => {
    const favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms"));
    if (!favoriteFilms.length) {
      setMovieList(() => {
        return { docs: [] };
      });
      return;
    }

    const url = buildUrl(favoriteFilms);
    // console.log("url:", url);

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
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <br />
      <button onClick={getFilms}>Get films</button>
      <div
        style={{
          width: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid
          container
          justifyContent="flex-start"
          style={{
            gridColumnGap: "20px",
            marginTop: "50px",
            gridRowGap: "30px",
          }}
        >
          {renderMovieList()}
        </Grid>
      </div>
    </div>
  );
};

export default FavoriteFilms;
