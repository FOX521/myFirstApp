import React from 'react';
import MessagesItem from './MessagesItem';

class Messages extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let messagesItem =this.props.messages.map(el => <MessagesItem message={el.message} />);
        return(
            <section className='message-page__messages'>
            <ul className='message-page__messages-list'>
               {messagesItem}
            </ul>
            </section>
        )
    }
}

export default Messages;
