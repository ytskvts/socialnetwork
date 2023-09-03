const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';


let store = {
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
        },
    },

    _callSubscriber() {
        console.log("state changed")
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._state.profilePage.postsData.push({
                    id: this._state.profilePage.postsData.count,
                    text: this._state.profilePage.newPostText,
                    likesCounter: 0
                })
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state)
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
                break;
            default:
                console.log("actions type is/'t defined")
        }
    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export default store;