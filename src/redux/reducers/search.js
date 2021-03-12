import { combineReducers } from "redux";
import { get } from "lodash";
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETED,
  SEARCH_MOVIE_BY_ID_START,
  SEARCH_MOVIE_BY_ID_COMPLETED,
  SEARCH_MOVIE_BY_ID_ERROR,
} from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading: true };
    case SEARCH_MOVIE_ERROR:
      return { ...state, isLoading: false, movieResults: null };
    case SEARCH_MOVIE_COMPLETED:
      return { ...state, isLoading: false, movieResults: action.results.data };
    case SEARCH_MOVIE_BY_ID_START:
      return { ...state, isLoading: true, movieResult: null };
    case SEARCH_MOVIE_BY_ID_ERROR:
      return { ...state, isLoading: false, movieResult: null };
    case SEARCH_MOVIE_BY_ID_COMPLETED:
      return { ...state, isLoading: false, movieResult: action.movie.data };

    default:
      return state;
  }
}
