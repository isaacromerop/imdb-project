import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_COMPLETED,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_COMPLETED,
  SEARCH_MOVIE_BY_ID_START,
} from "../../consts/actionTypes";
import { put, call, takeLatest } from "redux-saga/effects";

import { apiCall } from "../api";

export function* searchMovie({ payload }) {
  try {
    const results = yield call(
      apiCall,
      `&s=${payload.movieName}`,
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_MOVIE_COMPLETED, results });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_ERROR, error });
  }
}

export function* searchMovieById({ payload }) {
  try {
    const movie = yield call(
      apiCall,
      `&i=${payload.movieId}`,
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_MOVIE_BY_ID_COMPLETED, movie });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVIE_START, searchMovie);
  yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMovieById);
}
