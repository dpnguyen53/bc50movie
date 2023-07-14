import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAIL,
} from "./constants";

export const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

export const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

export const actListMovieFail = (error) => {
  return {
    type: LIST_MOVIE_FAIL,
    payload: error,
  };
};
