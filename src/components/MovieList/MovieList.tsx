import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import YearFilter from "../Filters/YearFilter";
const MovieList = (props: any) => {
  const { data } = props;
  // console.log(data);
  const [currentMovieList, setCurrentMovieList] = useState(data);

  return (
    <>
      <div className="filters">
        <YearFilter setCurrentMovieList={setCurrentMovieList} />
      </div>
      <Grid container justifyContent="center" style={{ gridColumnGap: "20px" }}>
        {currentMovieList.docs.map((value: any) => (
          <Card data={value} key={value.id} />
        ))}
      </Grid>
    </>
  );
};

export default MovieList;
