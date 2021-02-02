import React from 'react';
import DialogssItem from './DialogsItem';

class Dialogs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let dialogsItem = this.props.dialogs.map(el => <DialogssItem dialog={el.dialog} />);
        return(
            <ul className='message-page__dialogs-list'>
            {dialogsItem} 
        </ul>
        )
    }
}

export default Dialogs; 