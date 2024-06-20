import React, { useEffect, useState } from "react";
import { fetcher } from "../fetcher/fetcher";
import Autocomplete from "../Autocomplete/Autocomplete";

const apiKey = process.env.REACT_APP_API_KEY_2;
const genresUrl =
  "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name";
const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};

const GenreFilter = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [genres, setGenres] = useState([]);
  const { setUrlObject } = props;

  useEffect(() => {
    const response = fetcher(genresUrl, options);
    setIsLoading(true);
    response.then((res) => {
      setIsLoading(false);
      console.log(res);
      setGenres(res);
    });
  }, []);

  const setSelectedGenres = (value) => {
    setUrlObject((prevState) => ({ ...prevState, genre: value }));
  };

  return (
    <>
      <div>
        <div>Жанры</div>

        {!isLoading && (
          <Autocomplete genres={genres} setUrlFilter={setSelectedGenres} />
        )}
      </div>
    </>
  );
};

export default GenreFilter;
