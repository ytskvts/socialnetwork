import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rendererEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText ={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

subscribe(rendererEntireTree)
rendererEntireTree(state)

reportWebVitals();
