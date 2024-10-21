import axios from "axios";
import { ALLMOVIES, MOVIEAPI } from "../types/moviesTypes";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MOVIEAPI);
    console.log(res.data.results);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};

export const movieSearsh = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=ffcb86e2fb141a342f762e30f20a88b8`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=ffcb86e2fb141a342f762e30f20a88b8&page=${page}`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pageCount: res.data.total_pages,
    });
  };
};
