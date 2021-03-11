import { makeStyles } from "@material-ui/core";

const centeredObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  container: {
    height: "100vh",
    flexDirection: "column",
    ...centeredObject,
  },
  cardContainer: {
    ...centeredObject,
    flexDirection: "column",
    width: 400,
    height: 200,
    paddin: "2rem",
  },
  title: {
    fontSize: "3rem",
  },
  titleGridContainer: {
    ...centeredObject,
  },
  textFieldSearch: {
    width: "90%",
  },
  searchButton: {
    marginLeft: "0.5rem",
  },
  buttonsContainer: {
    marginTop: "0.5rem",
  },
  movieIcon: { fontSize: "3rem" },
});
