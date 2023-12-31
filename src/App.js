import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = (props) => {
  //   console.log(props, "propsAPP");
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className={"app-wrapper-content"}>
        <Routes>
          <Route path="/profile" element={<Profile store={props.store.getState()} dispatch={props.dispatch} />} />
          <Route path="/dialogs/*" element={<Dialogs state={props.store.getState().dialogsPage} />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
