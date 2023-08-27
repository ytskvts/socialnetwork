import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
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