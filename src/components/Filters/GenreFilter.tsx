import React, { useEffect, useState } from "react";
import { fetcher } from "../fetcher/fetcher";
import Autocomplete from "../Autocomplete/Autocomplete";

const apiKey = process.env.REACT_APP_API_KEY_2;
const genresUrl =
  "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name";
const url = "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50";
const options = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": apiKey },
};

const genreList = [
  {
    name: "аниме",
    slug: "anime",
  },
  {
    name: "биография",
    slug: "biografiya",
  },
  {
    name: "боевик",
    slug: "boevik",
  },
  {
    name: "вестерн",
    slug: "vestern",
  },
  {
    name: "военный",
    slug: "voennyy",
  },
  {
    name: "детектив",
    slug: "detektiv",
  },
  {
    name: "детский",
    slug: "detskiy",
  },
  {
    name: "для взрослых",
    slug: "dlya-vzroslyh",
  },
  {
    name: "документальный",
    slug: "dokumentalnyy",
  },
  {
    name: "драма",
    slug: "drama",
  },
  {
    name: "игра",
    slug: "igra",
  },
  {
    name: "история",
    slug: "istoriya",
  },
  {
    name: "комедия",
    slug: "komediya",
  },
  {
    name: "концерт",
    slug: "koncert",
  },
  {
    name: "короткометражка",
    slug: "korotkometrazhka",
  },
  {
    name: "криминал",
    slug: "kriminal",
  },
  {
    name: "мелодрама",
    slug: "melodrama",
  },
  {
    name: "музыка",
    slug: "muzyka",
  },
  {
    name: "мультфильм",
    slug: "multfilm",
  },
  {
    name: "мюзикл",
    slug: "myuzikl",
  },
  {
    name: "новости",
    slug: "novosti",
  },
  {
    name: "приключения",
    slug: "priklyucheniya",
  },
  {
    name: "реальное ТВ",
    slug: "realnoe-TV",
  },
  {
    name: "семейный",
    slug: "semeynyy",
  },
  {
    name: "спорт",
    slug: "sport",
  },
  {
    name: "ток-шоу",
    slug: "tok-shou",
  },
  {
    name: "триллер",
    slug: "triller",
  },
  {
    name: "ужасы",
    slug: "uzhasy",
  },
  {
    name: "фантастика",
    slug: "fantastika",
  },
  {
    name: "фильм-нуар",
    slug: "film-nuar",
  },
  {
    name: "фэнтези",
    slug: "fentezi",
  },
  {
    name: "церемония",
    slug: "ceremoniya",
  },
];

const GenreFilter = (props) => {
  const defaultSelectedGenresValue = [];
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [genres, setGenres] = useState(genreList);
  const [selectedGenres, setSelectedGenres] = useState(
    defaultSelectedGenresValue
  );
  const [localUrl, setLocalUrl] = useState(url);
  const { setCurrentMovieList } = props;

  const getGenres = () => {
    const response = fetcher(genresUrl, options);
    setIsLoading(true);
    response.then((res) => {
      setIsLoading(false);
      setGenres(res);
    });
  };

  const acceptFilter = () => {
    const url = selectedGenres.reduce((urlAcc: string, genre) => {
      return urlAcc.concat(`&type=${genre.slug}`);
    }, "");

    setLocalUrl((prevState) => {
      return prevState.concat(url);
    });
  };

  useEffect(() => {
    const response = fetcher(localUrl, options);
    setIsLoading(true);
    response.then((res) => {
      setIsLoading(false);
      setCurrentMovieList(res);
    });
    console.log("useEffected");
  }, [localUrl]);

  return (
    <>
      {!isLoading && (
        <Autocomplete genres={genres} setSelectedGenres={setSelectedGenres} />
      )}
      {/* <button onClick={getGenres}>Get genres</button> */}
      <button onClick={acceptFilter}>accept filter</button>
    </>
  );
};

export default GenreFilter;
