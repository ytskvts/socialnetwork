import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rendererEntireTree = (store) => {
  //   console.log(store, "rendererEntireTree");
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} dispatch={store.dispatch} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rendererEntireTree(store);

store.subscribe(() => {
  rendererEntireTree(store);
});

reportWebVitals();
