import React from 'react';
import { connect } from 'react-redux';
import { followActionCreater, unFollowActionCreater, setUsersActionCreater, setCurrentPageActionCreater, setCountUsersActionCreater, toggleFetchingActionCreater} from '../data/reducerUserPage';
import axios from 'axios'
import UsersPage from './UsersPage';
import preloader from '../assets/preloader.gif'

class UserPageAPI extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleFetching(true);
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            
        })
    };

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleFetching(false)
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <>
            {this.props.isFetching ? <img src={preloader} /> : null }
        <UsersPage onPageChange={this.onPageChange} 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage ={this.props.currentPage} 
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow} />
            </>
        )
    };
};

let mapStateToProps = (state) => {
    return  {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
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
        }
    }
};

let UserPageContainer = connect(mapStateToProps,mapDispatchToProps)(UserPageAPI)

export default UserPageContainer;