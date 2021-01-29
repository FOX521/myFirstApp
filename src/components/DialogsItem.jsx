import React from 'react';

class DialogssItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li className="dialogs__list-item">
                <p>
                    {this.props.dialog}
                </p>
            </li>
        )
    }
};

export default DialogssItem;