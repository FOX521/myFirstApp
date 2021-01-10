import React from 'react';

class Messages extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <section className='dialogs'>
                <ul className='dialogs__list'>
                    <li className='dialogs__list-item'>
                        Dmitryi
                    </li>
                    <li className='dialogs__list-item'>
                        Sacha
                    </li>
                    <li className='dialogs__list-item'>
                        Andrey
                    </li>
                    <li className='dialogs__list-item'>
                        Sveta
                    </li>
                    <li className='dialogs__list-item'>
                        Viktor
                    </li>
                    <li className='dialogs__list-item'>
                        Valera
                    </li>
                </ul>
                <section className='dialogs__messages'>
                    <ul className='dialogs__messages-list'>
                        <li className="dialogs__message-item">

                        </li>
                        <li className="dialogs__message-item">
                            
                        </li>
                        <li className="dialogs__message-item">

                        </li>
                    </ul>
                </section>
            </section>
        )
    }
}

export default Messages