const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    login: null,
    email: null,
    userid: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }    
        default:   
            return state     
    }
};


export const setUserDataAC = (userid, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userid,
            email,
            login
        }
    }
}

export default authReducer;