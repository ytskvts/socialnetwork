import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.text}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <DialogItem name="Dimas" id="0"/>
                <DialogItem name="Yulia" id="1"/>
                <DialogItem name="Sasha" id="2"/>
                <DialogItem name="Masha" id="3"/>
            </div>
            <div className={styles.messages}>
                <Message text="Hi"/>
                <Message text="Hello"/>
                <Message text="Whatsup"/>
                <Message text="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;