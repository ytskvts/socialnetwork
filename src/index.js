import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let data = {
    dialogsData: [
        {id: 0, name: "Dima"},
        {id: 1, name: "Yulia"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Masha"},
    ],
    messagesData: [
        {id: 0, text: "Hi"},
        {id: 1, text: "Hello"},
        {id: 2, text: "Whatsup"},
        {id: 3, text: "Yo"},
    ],
    postsData: [
        {id: 0, text: "Hello", likesCounter: 15},
        {id: 1, text: "Bye", likesCounter: 20},
    ],
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
