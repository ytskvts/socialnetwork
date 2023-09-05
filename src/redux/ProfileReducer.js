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
const profileReducer = (state, action) => {
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