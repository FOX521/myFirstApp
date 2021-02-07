import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import DialogsItem from './DialogsItem';

class Dialogs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let dialogList = this.props.dialogs.map(el => <NavLink className='message-page__dialogs--link' to={'/' + el.dialog}><DialogsItem dialog={el.dialog} id={el.id}/></NavLink>);
                                                            
        return(
            <ul className='message-page__dialogs-list'>
            {dialogList}
        </ul>
        )
    }
}

export default Dialogs; 