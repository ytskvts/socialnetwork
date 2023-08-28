import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src="data:image/png;base64,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" />
            <label>{props.message}</label>
            <div>
                <span>Likes: </span>{props.likesCounter}
            </div>
        </div>
    );
}

export default Post;