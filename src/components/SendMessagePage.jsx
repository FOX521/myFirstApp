import React from 'react';

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

        let changeInput = (evt) => {
            let text = evt.target.value;
            this.props.getChangeInput(text);
        }

        let sendMessage = () => {
            let text = newMessage.current.value;
            this.props.OnSendMessage(text)
        }

        return (
            <section style={messagePageStyle}>
                <textarea style={placeholderStyle}
                    ref={newMessage}
                    onChange={changeInput}
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

export default SendMessagePage;