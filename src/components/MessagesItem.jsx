import React from 'react';

class MessagesItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return(
            <li>
                <p>
                    {this.props.message}
                </p>
            </li>
        )
    }
}

export default MessagesItem;