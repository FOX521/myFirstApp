let renderTree = () => {
    console.log('state was change')
}

let state = {
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
    // addPost: (message) => {
    //     let newMessage = {
    //         id: state.messagesPage.messages.length + 1,
    //         dialog: message
    //     }
    //     state.messagesPage.messages.push(newMessage);
    //     renderTree(state);
    //     debugger
    // }
}

export function addPost(message) {
    let newMessage = {
        id: state.profilePage.posts.length + 1,
        post: message
    }
    state.profilePage.posts.push(newMessage);
    renderTree(state);
};

export function addUpdate(text) {
    state.profilePage.newPostText = text;
    renderTree(state);
} 

export function subscriber (observer) {
    renderTree = observer;
}


export default state;