import React, { useEffect } from "react";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";

import { Container, CircularProgress } from "@material-ui/core";

import { searchMovie } from "../../redux/actions/search";
import { isSearchLoading, movieResults } from "../../redux/selectors";

import MovieResults from "../../components/MovieResults";

const Results = ({ location }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => isSearchLoading(state));
  const movies = useSelector((state) => movieResults(state));
  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    dispatch(searchMovie({ movieName }));
  }, []);
  const renderResults = () => {
    if (movies) {
      return movies.map((result, index) => (
        <MovieResults key={index} {...result} />
      ));
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    }
    return <div></div>;
  };

  return (
    <Container>
      <h1>{renderResults()}</h1>
    </Container>
  );
};

export default Results;
