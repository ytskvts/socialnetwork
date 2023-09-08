const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';

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

let initialState = {
    postsData: [
        {id: 0, text: "Hello", likesCounter: 15},
        {id: 1, text: "Bye", likesCounter: 20},
    ],
    newPostText: "Some text",
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            state.postsData.push({
                id: state.postsData.count,
                text: state.newPostText,
                likesCounter: 0
            })
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export default profileReducer;