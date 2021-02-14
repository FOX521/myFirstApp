const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

const reducerPostPage = (action, state) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                post: action.text
            }
            state.posts.push(newPost);
            state.newPostText = '';
        break;
        case UPDATE_TEXT:
            state.newPostText = action.text;
        break;
    };
    return state;
};

export const createAddPost = (text) => { 
    return {type:  ADD_POST, text: text}
};

export const createChangeInput = (text) =>{
    return {type: UPDATE_TEXT, text: text}
}

export default reducerPostPage;