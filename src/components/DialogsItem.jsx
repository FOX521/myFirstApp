import React from 'react';

class DialogsItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li className="message-page__dialogs--list-item">
                <p className='message-page__dialogs--text'>
                    {this.props.dialog}
                </p>
            </li>
        )
    }
};

export default DialogsItem;