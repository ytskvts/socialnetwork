import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";




const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())
    };

    let onPostChange = () => {
        // props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        props.updateNewPostText(newPostElement.current.value)
    }

    return (
        <div className={styles.myPostBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea  onChange={ onPostChange }
                           ref={newPostElement}
                           value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={ onAddPost }>Add Post </button>
            </div>
            <div>
                {props.postsData.map((el) => <Post text={el.text} likesCounter={`${el.likesCounter}`} />)}
            </div>
        </div>
    );
}

export default MyPosts;