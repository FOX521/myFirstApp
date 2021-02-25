import React from 'react';

class UserPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.users.map((u) => <div key={u.id} >
                <span>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <button></button>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div></div>
                        <div></div>
                    </span>
                </span>
            </div>)
        )
    }
}

export default UserPage