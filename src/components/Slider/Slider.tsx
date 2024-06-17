import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider(props: {
  value: number[];
  setValue: any;
  year: number;
}) {
  const { value, setValue, year } = props;

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300, paddingLeft: 20, paddingTop: 5 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1990}
        max={year}
      />
    </Box>
  );
}
