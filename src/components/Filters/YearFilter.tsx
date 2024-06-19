import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import { fetcher } from "../fetcher/fetcher";

const year = new Date().getFullYear();
const YearFilter = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUrl } = props;

  const [value, setValue] = useState<number[]>([1990, year]);

  const setFilter = () => {
    const localUrl =
      value[0] === value[1]
        ? `&year=${value[0]}`
        : `&year=${value[0]}-${value[1]}`;

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
        <Slider value={value} setValue={setValue} min={1990} max={year} />
      )}
    </div>
  );
};

export default YearFilter;
