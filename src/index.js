import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore"

const root = ReactDOM.createRoot(document.getElementById('root'));
let rendererEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rendererEntireTree(store.getState())

store.subscribe( () => {
    rendererEntireTree(store.getState())
})

reportWebVitals();
