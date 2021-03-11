import axios from 'axios';
import React from 'react';
import react from 'react'
import { connect } from 'react-redux';
import { setUserDataAC } from '../data/reducerAuth';
import Header from './Header';

class HeaderContainer extends React.Component {
   componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    .then(response => {
        debugger
        if(response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            this.props.setUserDataAC(id, email, login)
        }
    });
  }
   
    render() {
        return (
            <Header {...this.props} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer) 