import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/DialogsReducer";

const Dialogs = (props) => {
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = (e) => {
    props.dispatch(updateNewMessageTextActionCreator(e.target.value));
  };
  // return dialogsData.map((el) => <DialogItem name={el.name} id={`${el.id}`}/>)
  return (
    <div className={styles.dialogs}>
      <div>
        {props.state.dialogsData.map((el) => (
          <DialogItem name={el.name} id={`${el.id}`} />
        ))}
      </div>
      <div>
        <div>
          {props.state.messagesData.map((el) => (
            <Message text={el.text} />
          ))}
        </div>
        <div>
          <textarea onChange={onMessageChange} value={props.state.newMessageText} placeholder="Some text" />
        </div>
        <div>
          <button onClick={sendMessage}>Send Message </button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
