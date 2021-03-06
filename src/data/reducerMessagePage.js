const CREATE_MESSAGE = 'CREATE-NEW-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initialState = {
    messages: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'Nice'
        },
        {
            id: 4,
            message: 'Cool'
        }
    ],
    dialogs: [
        {
            id: 1,
            dialog: 'Andrey'
        },
        {
            id: 2,
            dialog: 'Michael'
        },
        {
            id: 3,
            dialog: 'Sacha'
        },
        {
            id: 4,
            dialog: 'John'
        },
        {
            id: 5,
            dialog: 'Dmitryi'
        }
    ],
    newMessageBody: '',
};

const reducerMessagePage = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        messages: [...state.messages]
    };
    
    switch (action.type) {
        case CREATE_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.text
            }
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageBody = '';
            break;
        case UPDATE_TEXT_MESSAGE:
            stateCopy.newMessageBody = action.text;
            break;
    };
    return stateCopy;
};

export const createNewMessageBody = (text) => {
    return { type: CREATE_MESSAGE, text: text }
};

export const createChangeInputMessage = (text) => {
    return { type: UPDATE_TEXT_MESSAGE, text: text }
};

export default reducerMessagePage;
