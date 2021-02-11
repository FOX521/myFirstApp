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
            ]
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
            newPostText: 'pOPO',
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
    addPost(message) {
        let newMessage = {
            id: this._state.profilePage.posts.length + 1,
            post: message
        }
        this._state.profilePage.posts.push(newMessage);
        this._callSubscriber(this._state);
    },
    addUpdate(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    }
}

export default store;