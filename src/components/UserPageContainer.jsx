import React from 'react';
import { connect } from 'react-redux';
import { followActionCreater, unFollowActionCreater, setUsersActionCreater } from '../data/reducerUserPage';
import UserPage from './UserPage'

let mapStateToProps = (state) => {
    return  {
        users: state.userPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreater(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users))
        }
    }
};

let UserPageContainer = connect(mapStateToProps,mapDispatchToProps)(UserPage)

export default UserPageContainer;