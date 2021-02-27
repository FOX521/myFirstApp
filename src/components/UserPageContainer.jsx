import React from 'react';
import { connect } from 'react-redux';
import { followActionCreater, unFollowActionCreater, setUsersActionCreater, setCurrentPageActionCreater, setCountUsersActionCreater } from '../data/reducerUserPage';
import UserPage from './UserPage'

let mapStateToProps = (state) => {
    return  {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreater(pageNumber))
        },
        setTotalUsersCount: (usersCounts) => {
            dispatch(setCountUsersActionCreater(usersCounts))
        }
    }
};

let UserPageContainer = connect(mapStateToProps,mapDispatchToProps)(UserPage)

export default UserPageContainer;