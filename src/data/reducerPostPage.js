const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {
            id: 1,
            post: 'I learned English!',
            like: 5,

        },
        {
            id: 2,
            post: 'Wow! Congortulashion!',
            like: 4,
        },
        {
            id: 3,
            post: 'You sucks',
            like: 7
        },
        {
            id: 4,
            post: 'What are you doing on saturday?',
            like: 1
        }
    ],
    newPostText: '',
    profile: null
};

const reducerPostPage = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        messages: [...state.posts]
    }

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                post: action.text
            }
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            break;
        case UPDATE_TEXT:
            stateCopy.newPostText = action.text;
            break;
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
            break;
    };
    return stateCopy;
};

export const createAddPost = (text) => {
    return { type: ADD_POST, text: text }
};

export const createChangeInput = (text) => {
    return { type: UPDATE_TEXT, text: text }
}

export const setUserProfileAC = (profile) => {
    return {type: SET_USER_PROFILE, profile}
} 

export default reducerPostPage;