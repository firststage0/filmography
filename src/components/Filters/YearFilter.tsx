import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";

const year = new Date().getFullYear();
const YearFilter = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUrlObject } = props;

  const [value, setValue] = useState<number[]>([1990, year]);

  useEffect(() => {
    setUrlObject((prevState) => ({
      ...prevState,
      year: value,
    }));
  }, [value]);

  return (
    <div>
      {!isLoading && (
        <Slider value={value} setValue={setValue} min={1990} max={year} />
      )}
    </div>
  );
};

export default YearFilter;
