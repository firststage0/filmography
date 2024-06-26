import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";

const min = 0;
const max = 10;
const RatingFilter = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUrlObject } = props;

  const [value, setValue] = useState<number[]>([min, max]);

  useEffect(() => {
    setUrlObject((prevState) => ({
      ...prevState,
      rating: value,
    }));
  }, [value]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "40" }}>Рейтинг:</div>
        {<Slider value={value} setValue={setValue} min={min} max={max} />}
      </div>
    </div>
  );
};

export default RatingFilter;
