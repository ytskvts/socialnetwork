let rendererEntireTree

let state = {
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
}

export const addPost = () => {
    state.profilePage.postsData.push({
        id: state.profilePage.postsData.count,
        text: state.profilePage.newPostText,
        likesCounter: 0
    })
    state.profilePage.newPostText = "";
    rendererEntireTree(state)
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text
    rendererEntireTree(state)
}

export const subscribe = (observer) => {
    rendererEntireTree = observer
}

export default state;