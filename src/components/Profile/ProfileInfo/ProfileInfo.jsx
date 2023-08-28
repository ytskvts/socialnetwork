import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img width="100%" height="30px" src='https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg' />
            </div>
            <div className={styles.descriptionBlock}>
                Ava + Description
            </div>
        </div>
    );
}

export default ProfileInfo;