import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 0, text: "Hello", likesCounter: 15},
        {id: 1, text: "Bye", likesCounter: 20},
    ]

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
                {postsData.map((el) => <Post text={el.text} likesCounter={`${el.likesCounter}`} />)}
            </div>
        </div>
    );
}

export default MyPosts;