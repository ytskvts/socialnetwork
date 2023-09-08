import React from "react";

import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";

const MyPostsContainer = (props) => {
  //   console.log(props, "propsMyPostsContainer");
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return <MyPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={props.store.profilePage.newPostText} postsData={props.store.profilePage.postsData} />;
};

export default MyPostsContainer;
