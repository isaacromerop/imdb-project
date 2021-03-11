import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import styles from "./style";

const MovieResult = ({ Title, Year, Type, Poster, imdbID, history }) => {
  const classes = styles();
  const seeMore = () => {
    history.push(`/movie/${imdbID}`);
  };
  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button onClick={seeMore} color="primary" variant="contained">
            See more
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default withRouter(MovieResult);
