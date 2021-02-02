import React from 'react';
import Dialogs from './Dialogs';
import DialogssItem from './DialogsItem';
import Messages from './Messages';


class MessagesPage extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {        
        return (
            <section className='message-page'>
                <Dialogs dialogs={this.props.messagesPage.dialogs}/>
                <Messages messages={this.props.messagesPage.messages}/>
            </section>
        )
    }
}

export default MessagesPage;