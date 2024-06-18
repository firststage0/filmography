import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import YearFilter from "../Filters/YearFilter";
import GenreFilter from "../Filters/GenreFilter";
const MovieList = (props: any) => {
  const { data } = props;
  // console.log(data);
  const [currentMovieList, setCurrentMovieList] = useState(data);

  return (
    <>
      {<YearFilter setCurrentMovieList={setCurrentMovieList} />}
      <div style={{ display: "inline" }}>
        <div style={{ paddingTop: "100px" }}>
          <GenreFilter setCurrentMovieList={setCurrentMovieList} />
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
    </>
  );
};

export default MovieList;
