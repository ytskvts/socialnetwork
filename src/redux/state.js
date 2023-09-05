import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

let store = {

    _callSubscriber() {
        console.log("state changed")
    },
    _state: {
        profilePage: {
            postsData: [
                {id: 0, text: "Hello", likesCounter: 15},
                {id: 1, text: "Bye", likesCounter: 20},
            ],
            newPostText: "Some text",
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },
}
export default store;