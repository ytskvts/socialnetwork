import React from "react";

import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";


const MyPostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts updateNewPostText={ onPostChange }
                 addPost={ addPost }
                 newPostText={props.store.profilePage.newPostText}
                 postsData={props.store.profilePage.postsData}
        />
    );
}

export default MyPostsContainer;