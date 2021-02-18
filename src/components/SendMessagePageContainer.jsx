import React from 'react';
import SendMessagePage from './SendMessagePage';
import { createChangeInputMessage, createNewMessageBody } from '../data/reducerMessagePage';

class SendMessagePageContainer extends React.Component {
    render() {
        let getChangeInput = (text) => {
            this.props.store.dispatch(createChangeInputMessage(text));
        };
        let OnSendMessage = (text) => {
            this.props.store.dispatch(createNewMessageBody(text))
        };

        return (
            <SendMessagePage messagesPage={this.props.store.getState().messagesPage} getChangeInput={getChangeInput} OnSendMessage={OnSendMessage} />
        )
    }
}

export default SendMessagePageContainer;