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

    addPost() {
        this._state.profilePage.postsData.push({
            id: this._state.profilePage.postsData.count,
            text: this._state.profilePage.newPostText,
            likesCounter: 0
        })
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state)
    },

    updateNewPostText(text) {
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

}


export default store;