import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={props.state.newPostText}
                     postsData={props.state.postsData}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;