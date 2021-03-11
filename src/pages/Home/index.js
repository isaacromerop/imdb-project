import React, { useState } from "react";
import {
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import styles from "./style";
import { MovieIcon } from "../../icons";

const Home = ({ history }) => {
  const [searchBox, setSearchBox] = useState("");
  const classes = styles();

  const handleChange = (e) => {
    setSearchBox(e.target.value);
  };

  const handleSearch = () => {
    history.push(`/results?movieName=${searchBox}`)
  };

  return (
    <div>
      <Container className={classes.container}>
        <Card className={classes.cardContainer}>
          <Grid container className={classes.titleGridContainer}>
            <Grid>
              <Typography className={classes.title}>Welcome!</Typography>
            </Grid>
            <Grid>
              <MovieIcon className={classes.movieIcon} />
            </Grid>
          </Grid>
          <TextField
            className={classes.textFieldSearch}
            value={searchBox}
            placeholder="Search..."
            onChange={(e) => handleChange(e)}
          />
          <Grid className={classes.buttonsContainer}>
            <Button variant="contained" onClick={() => setSearchBox("")}>
              Clean
            </Button>
            <Button
              className={classes.searchButton}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Grid>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
