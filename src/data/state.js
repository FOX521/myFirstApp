const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const CREATE_MESSAGE = 'CREATE-NEW-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let store = {
    _state: {
        messagesPage: {
            messages: [
                {
                    id:1,
                    message: 'Hi'
                 },
                {
                    id:2,
                    message: 'How are you?'
                },
                {
                    id:3,
                    message: 'Nice'
                },
                {
                    id:4,
                    message: 'Cool'
                }
            ],
            dialogs: [
                {
                    id:1,
                    dialog: 'Andrey'
                },
                {
                    id:2,
                    dialog: 'Michael'
                },
                {
                    id:3,
                    dialog: 'Sacha'
                },
                {
                    id:4,
                    dialog: 'John'
                },
                {
                    id: 5,
                    dialog: 'Dmitryi'
                }
            ],
            newMessageBody : '',
        },
        profilePage: {
            posts: [
                {   id:1,
                    post: 'I learned English!',
                    like: 5,
                    
                },
                {
                    id:2,
                    post: 'Wow! Congortulashion!',
                    like: 4,
                },
                {
                    id:3,
                    post: 'You sucks',
                    like: 7
                },
                {
                    id:4,
                    post: 'What are you doing on saturday?',
                    like:1
                }
            ],
            newPostText: '',
        },
        newsPage: {},
        musicPage: {}, 
        settingPage: {},
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state was change')
    },
    dispatch(action) { 
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: this._state.profilePage.posts.length + 1,
                    post: action.text
                }
                this._state.profilePage.posts.push(newPost);
                this._callSubscriber(this._state);
                this._state.profilePage.newPostText = '';
            break;
            case UPDATE_TEXT:
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
            break;
            case CREATE_MESSAGE:
                let newMessage = {
                    id: this._state.messagesPage.messages.length + 1,
                    message: action.text
                }
                this._state.messagesPage.messages.push(newMessage);
                this._callSubscriber(this._state);
                this._state.messagesPage.newMessageBody = '';
            break;
            case UPDATE_TEXT_MESSAGE:
                this._state.messagesPage.newMessageBody = action.text;
                this._callSubscriber(this._state);                
            break;
        };
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    }
}

export const createAddPost = (text) => { 
    return {type:  ADD_POST, text: text}
};

export const createChangeInput = (text) =>{
    return {type: UPDATE_TEXT, text: text}
}

export const createNewMessageBody = (text) => {
    return {type: CREATE_MESSAGE, text: text}
}

export const createChangeInputMessage = (text) => {
    return {type: UPDATE_TEXT_MESSAGE, text: text}
}

export default store;