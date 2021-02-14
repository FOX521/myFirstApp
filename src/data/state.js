import reducerMessagePage from "./reducerMessagePage";
import reducerPostPage from "./reducerPostPage";

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
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { 
       this._state.profilePage = reducerPostPage(action, this._state.profilePage);
       this._state.messagesPage = reducerMessagePage(action, this._state.messagesPage);
       this._callSubscriber(this._state);
    },
}

export default store;