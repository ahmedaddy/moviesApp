import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { store } from "./redux/store/index";
import { Provider } from "react-redux";

const route = createRoot(document.getElementById("root"));
route.render(
  <Provider store={store}>
    <App />
  </Provider>
);
