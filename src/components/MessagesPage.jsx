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
                <Dialogs dialogs={this.props.messagesPage.dialogs}/>
                <Messages messagesPage={this.props.messagesPage} dispatch={this.props.dispatch}/>
            </section>
        )
    }
}

export default MessagesPage;