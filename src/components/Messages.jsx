import React from 'react';
import MessagesItem from './MessagesItem';
import SendMessagePage from './SendMessagePage';
import SendMessagePageContainer from './SendMessagePageContainer';

class Messages extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let messagesItem = this.props.store.getState().messagesPage.messages.map(el => <MessagesItem key={el.id + '1'.toString()} message={el.message} />);

        return (
            <section className='message-page__messages'>
                <ul className='message-page__messages-list'>
                    {messagesItem}
                </ul>
                <SendMessagePageContainer store={this.props.store} />
            </section>
        )
    }
}

export default Messages;
