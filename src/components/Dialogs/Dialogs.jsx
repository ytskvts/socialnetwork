import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 0, name: "Dima"},
        {id: 1, name: "Yulia"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Masha"},
    ]

    let messagesData = [
        {id: 0, text: "Hi"},
        {id: 1, text: "Hello"},
        {id: 2, text: "Whatsup"},
        {id: 3, text: "Yo"},
    ]

    // return dialogsData.map((el) => <DialogItem name={el.name} id={`${el.id}`}/>)
    return (
        <div className={styles.dialogs}>
            <div>
                {dialogsData.map((el) => <DialogItem name={el.name} id={`${el.id}`}/>)}
            </div>
            <div>
                {messagesData.map((el) => <Message text={el.text} />)}
            </div>
        </div>
    );
}
export default Dialogs;