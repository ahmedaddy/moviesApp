import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Import your reducer
import { moviesReducer } from "../reducer/moviesReducer";

// Create store with thunk middleware
export const store = createStore(
  moviesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
