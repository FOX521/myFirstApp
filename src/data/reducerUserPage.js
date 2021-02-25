const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            follow: false,
            fullName: 'Dmitriy',
            status: 'I\'m a boss',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },
        {
            id: 2,
            follow: false,
            fullName: 'Alex',
            status: 'Just do it!',
            location: {
                city: 'Los-Angeles',
                country: 'USA'
            }
        },
        {
            id: 3,
            follow: true,
            fullName: 'Sara',
            status: 'You\'re next',
            location: {
                city: 'Munchen',
                country: 'Germany'
            }
        }
    ]
};


const reducerUserPage = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, follow: true }
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, follow: false }
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
            break;
    }
    return state

}

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
}

export const setUsersActionCreater = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default reducerUserPage;