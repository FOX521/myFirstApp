const CREATE_MESSAGE = 'CREATE-NEW-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

const reducerMessagePage = (action, state) => {
    switch (action.type) {
    case CREATE_MESSAGE:
                let newMessage = {
                    id: state.messages.length + 1,
                    message: action.text
                }
                state.messages.push(newMessage);
                state.newMessageBody = '';
            break;
            case UPDATE_TEXT_MESSAGE:
                state.newMessageBody = action.text;
            break;
    };
    return state;
};

export const createNewMessageBody = (text) => {
    return {type: CREATE_MESSAGE, text: text}
};

export const createChangeInputMessage = (text) => {
    return {type: UPDATE_TEXT_MESSAGE, text: text}
};

export default reducerMessagePage;
