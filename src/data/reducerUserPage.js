const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNTS = 'SET_USERS_COUNTS'

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1
};

const reducerUserPage = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_USERS_COUNTS: 
        return {
            ...state, 
            totalUsersCount: action.totalUsersCount
        }
    }
    return state
};

export const followActionCreater = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unFollowActionCreater = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export const setUsersActionCreater = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export const setCurrentPageActionCreater = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};

export const setCountUsersActionCreater = (totalUsersCount) => {
    return {
        type: SET_USERS_COUNTS,
        totalUsersCount
    }
}

export default reducerUserPage;