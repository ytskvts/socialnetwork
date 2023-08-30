import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    // return dialogsData.map((el) => <DialogItem name={el.name} id={`${el.id}`}/>)
    return (
        <div className={styles.dialogs}>
            <div>
                {props.dialogsData.map((el) => <DialogItem name={el.name} id={`${el.id}`}/>)}
            </div>
            <div>
                {props.messagesData.map((el) => <Message text={el.text} />)}
            </div>
        </div>
    );
}
export default Dialogs;