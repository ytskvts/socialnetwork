import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.myPostBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div> 
                <Post message="Hello" likesCounter="15"/>
                <Post message="Bye" likesCounter="20"/>
            </div>
        </div>
    );
}

export default MyPosts;