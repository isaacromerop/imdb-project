import { combineReducers } from "redux";
import { get } from "lodash";
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETED,
} from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading: true };
    case SEARCH_MOVIE_ERROR:
      return { ...state, isLoading: false, movies: null };
    case SEARCH_MOVIE_COMPLETED:
      return { ...state, isLoading: false, movieResults: action.results.data };

    default:
      return state;
  }
}
