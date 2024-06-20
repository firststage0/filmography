import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import YearFilter from "../Filters/YearFilter";
import GenreFilter from "../Filters/GenreFilter";
import RatingFilter from "../Filters/RatingFilter";
import { fetcher } from "../fetcher/fetcher";
import Pages from "../Pages/Pages";
import { Link } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY_2;

const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};

const testData = {
  id: 5699007,
  name: "Дарую ей власть над собой",
  alternativeName: "Shou ta yi bing",
  description: "AWUOIVBIPOFEUVBPAIFEUVPIAEFUVAIPFV",
  genres: [{ name: "мелодрама" }],
  poster: {
    url: "https://image.openmoviedb.com/kinopoisk-images/10900341/7b81ed24-447b-4177-8bc5-4ed800ec7cd3/orig",
  },
  rating: {
    kp: 0,
  },
  year: 2024,
};

const MovieList = () => {
  const [urlObject, setUrlObject] = useState({
    year: [],
    rating: [],
    genre: [],
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  // { docs: [{}] }
  const [MovieList, setMovieList] = useState({ docs: [testData] });
  const [page, setPage] = useState(1);

  const defaultUrl = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=50`;

  // useEffect(() => {
  //   getData();
  // }, [page]);

  const followPattern = (stringPattern, dataPattern) => {
    return `${stringPattern}${dataPattern[0]}-${dataPattern[1]}`;
  };

  const buildUrl = () => {
    const yearList = urlObject.year.length
      ? followPattern("&year=", urlObject.year)
      : "";
    const ratingList = urlObject.rating.length
      ? followPattern("&rating.kp=", urlObject.rating)
      : "";
    const genreList = urlObject.genre.length
      ? urlObject.genre.reduce((urlAcc: string, genre) => {
          return urlAcc.concat(`&genres.name=${genre.name}`);
        }, "")
      : "";
    return defaultUrl + yearList + ratingList + genreList;
  };

  const getData = () => {
    const url = buildUrl();
    const response = fetcher(url, options);
    setIsLoading(true);
    response.then((res) => {
      setIsLoading(false);
      console.log(res);
      setMovieList(res);
    });
  };

  const acceptFilters = () => {
    getData();
  };

  const renderMovieList = () => {
    switch (true) {
      case isLoading: {
        return <div>Загрузка...</div>;
      }
      default: {
        return MovieList.docs.map((value: any) => (
          <Link
            style={{ textDecoration: "none" }}
            to="filmdetails"
            state={{ data: value }}
          >
            <Card data={value} key={value.id} />
          </Link>
        ));
      }
    }
  };

  return (
    <>
      <div style={{ display: "inline" }}>
        <div style={{ display: "block", paddingTop: "100px" }}>
          <YearFilter setUrlObject={setUrlObject} />
          <RatingFilter setUrlObject={setUrlObject} />
          <GenreFilter setUrlObject={setUrlObject} />
          <button style={{ marginTop: "40px" }} onClick={acceptFilters}>
            Accept filters
          </button>
        </div>
        <div style={{ paddingLeft: 500 }}>
          <div style={{ width: "50px" }}>
            <Pages setPage={setPage} />
          </div>

          <Grid
            container
            justifyContent="flex-start"
            style={{ gridColumnGap: "20px" }}
          >
            {renderMovieList()}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default MovieList;
