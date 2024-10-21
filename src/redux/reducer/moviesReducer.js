import { ALLMOVIES } from "../types/moviesTypes";

const initialValue = { movies: [], pageCount: 0 };
export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return {
        movies: action.data,
        pageCount: action.pageCount,
      };
    default:
      return state;
  }
};
