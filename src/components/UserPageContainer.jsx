import React from 'react';
import { connect } from 'react-redux';
import { followActionCreater, unFollowActionCreater, setUsersActionCreater, setCurrentPageActionCreater, setCountUsersActionCreater, toggleFetchingActionCreater, toggleDisabledActionCreater } from '../data/reducerUserPage';
import axios from 'axios'
import UsersPage from './UsersPage';
import Preloader from './Preloader';
import getUsers from '../API/api';
class UserPageAPI extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    };

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleFetching(true);
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleFetching(false)
            this.props.setUsers(data.items);
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <UsersPage onPageChange={this.onPageChange}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    isDisabled={this.props.isDisabled}
                    toggleDisabled={this.props.toggleDisabled} />
            </>
        )
    };
};

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        isDisabled: state.userPage.isDisabled
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
        },
        toggleFetching: (isFetching) => {
            dispatch(toggleFetchingActionCreater(isFetching))
        },
        toggleDisabled: (isDisabled, userId) => {
            dispatch(toggleDisabledActionCreater(isDisabled, userId))
        }
    }
};

let UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPageAPI)

export default UserPageContainer;