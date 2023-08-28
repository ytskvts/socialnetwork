import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img width="100%" height="30px" src='https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg' />
            <div>
                Ava + Description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;