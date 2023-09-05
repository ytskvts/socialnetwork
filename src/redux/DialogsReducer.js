const UPDATE_NEW_MESSAGE_TEXT= 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE= 'SEND-MESSAGE';


export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        case SEND_MESSAGE:
            state.messagesData.push({
                id: state.messagesData.count,
                text: state.newMessageText
            })
            state.newMessageText = "";
            return state
        default:
            return state
    }
}

export default dialogsReducer;