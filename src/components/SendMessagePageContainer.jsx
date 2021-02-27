import React from 'react';
import SendMessagePage from './SendMessagePage';
import { createChangeInputMessage, createNewMessageBody } from '../data/reducerMessagePage';
import { connect } from 'react-redux';

// class SendMessagePageContainer extends React.Component {
//     render() {
//         let getChangeInput = (text) => {
//             this.props.store.dispatch(createChangeInputMessage(text));
//         };
//         let OnSendMessage = (text) => {
//             this.props.store.dispatch(createNewMessageBody(text))
//         };

//         return (
//             <SendMessagePage messagesPage={this.props.store.getState().messagesPage} getChangeInput={getChangeInput} OnSendMessage={OnSendMessage} />
//         )
//     }
// }

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getChangeInput: (text) => {
            dispatch(createChangeInputMessage(text));
        },
        OnSendMessage: (text) => {
            dispatch(createNewMessageBody(text));
        }
    }
}

let SendMessagePageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessagePage)

export default SendMessagePageContainer;