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

let initialState = {
    dialogsData: [
        {id: 0, name: "Dima"},
        {id: 1, name: "Yulia"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Masha"},
    ],
    messagesData: [
        {id: 0, text: "Hi"},
        {id: 1, text: "Hello"},
        {id: 2, text: "Whatsup"},
        {id: 3, text: "Yo"},
    ],
    newMessageText: "Some text",
}
const dialogsReducer = (state = initialState, action) => {
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