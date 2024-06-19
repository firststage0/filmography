import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import YearFilter from "../Filters/YearFilter";
import GenreFilter from "../Filters/GenreFilter";
import RatingFilter from "../Filters/RatingFilter";

const apiKey = process.env.REACT_APP_API_KEY_2;
const defaultUrl = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50`;
const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};

const MovieList = (props: any) => {
  const { data } = props;
  // console.log(data);
  const testData = [{ docs: [{}] }];
  const [url, setUrl] = useState<string>(defaultUrl);
  const [genreUrl, setGenreUrl] = useState("");
  const [currentMovieList, setCurrentMovieList] = useState(data);

  const acceptFilters = () => {
    console.log(`${url}${genreUrl}`);
  };

  return (
    <>
      <div style={{ display: "inline" }}>
        <div style={{ display: "block", paddingTop: "100px" }}>
          <YearFilter setUrl={setUrl} />
          <RatingFilter setUrl={setUrl} />
          <GenreFilter setGenreUrl={setGenreUrl} />
        </div>
        <div style={{ paddingLeft: 500 }}>
          <Grid
            container
            justifyContent="flex-start"
            style={{ gridColumnGap: "20px" }}
          >
            {currentMovieList.docs.map((value: any) => (
              <Card data={value} key={value.id} />
            ))}
          </Grid>
        </div>
      </div>
      <button onClick={acceptFilters}>Accept filters</button>
    </>
  );
};

export default MovieList;
