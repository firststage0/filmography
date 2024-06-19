import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";

const year = new Date().getFullYear();
const YearFilter = (props) => {
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
      <div style={{ display: "flex" }}>
        <div style={{ width: "40" }}>Год:</div>
        {<Slider value={value} setValue={setValue} min={1990} max={year} />}
      </div>
    </div>
  );
};

export default YearFilter;
