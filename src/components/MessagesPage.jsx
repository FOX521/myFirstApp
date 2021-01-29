import React from 'react';
import DialogssItem from './DialogsItem';
import MessagesItem from './MessagesItem';

class Messages extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {

        let dialogsItem = this.props.messagesPage.dialogs.map(el => <DialogssItem dialog={el.dialog} />);
        let messagesItem =this.props.messagesPage.messages.map(el => <MessagesItem message={el.message} />);
        return (
            <section className='dialogs'>
                <ul className='dialogs__list'>
                    {dialogsItem} 
                </ul>
                <section className='dialogs__messages'>
                <ul className='dialogs__messages-list'>
                    {messagesItem}
                </ul>
                </section>
            </section>
        )
    }
}

export default Messages;