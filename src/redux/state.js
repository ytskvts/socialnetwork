import {rendererEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 0, text: "Hello", likesCounter: 15},
            {id: 1, text: "Bye", likesCounter: 20},
        ],
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

export let addPost = (text) => {
    state.profilePage.postsData.push({
        id: state.profilePage.postsData.count,
        text: text,
        likesCounter: 0
    })
    rendererEntireTree(state)
}

export default state;