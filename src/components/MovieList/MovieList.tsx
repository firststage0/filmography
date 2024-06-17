import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
const MovieList = (props: any) => {
  const { data } = props;
  // console.log(data);

  return (
    <Grid container justifyContent="center" style={{ gridColumnGap: "20px" }}>
      {data.docs.map((value: any) => (
        <Card data={value} key={value.id} />
      ))}
    </Grid>
  );
};

export default MovieList;
