import React from 'react';
import Dialogs from './Dialogs';
import Messages from './Messages';


class MessagesPage extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <section className='message-page'>
                <Dialogs dialogs={this.props.store.getState().messagesPage.dialogs} />
                <Messages store={this.props.store} />
            </section>
        )
    }
}

export default MessagesPage;