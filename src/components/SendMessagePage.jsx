import React from 'react';
import { createChangeInputMessage, createNewMessageBody } from '../data/reducerMessagePage';

class SendMessagePage extends React.Component {
    render() {
        let messagePageStyle = {
            width: '100%'
        };

        let placeholderStyle = {
            width: '95%',
            height: '100px',
            margin: '10px',
            paddingLeft: '20px', 
            paddingTop: '5px',
            borderRadius: '10px',
        };

        let buttonListStyle = {
            display: 'Flex',
            justifyContent: 'space-between',
            width: '300px',
            paddingLeft: '10px',
            listStyle: 'none'
        };

        let newMessage = React.createRef();

        let getChangeInput = (evt) => {
            let text = evt.target.value;
            this.props.dispatch(createChangeInputMessage(text));
        };

        let sendMessage = () => {
            let text = newMessage.current.value;
            this.props.dispatch(createNewMessageBody(text))
        };

        return (
            <section style={messagePageStyle}>
                <textarea  style={placeholderStyle}
                           ref={newMessage}
                           onChange={getChangeInput}    
                           value={this.props.messagesPage.newMessageBody}
                           placeholder='Write your message'>
                           </textarea>
                <ul style={buttonListStyle}>
                <li>
                    <button onClick={sendMessage}>Send Message</button>
                </li>
                <li>
                    <button>File</button>
                </li>
                <li>
                    <button>Smile</button>
                </li>
                <li>
                    <button>Audio</button>
                </li>  
                 <li>
                    <button>Photo</button>
                </li>
                </ul>
            </section>
        )
    }
}

export  default SendMessagePage;