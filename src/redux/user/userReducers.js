import userActionKeys from './userActionKeys';

export default function userReducer(state = {
    loginInfo: null,
    currentUser: null,
    initFetching: false,
    errorMsg: null,
}, action) {
    switch (action.type) {
        case userActionKeys.loginSuccessful:
            return {
                ...state,
                loginInfo: action.loginInfo,
                initFetching: false
            }
        case userActionKeys.logoutSuccessful:
            return {
                ...state,
                loginInfo: null,
                initFetching: false
            }
        case userActionKeys.fetchCurrentUserInfoSuccessful:
            return {
                ...state,
                currentUser: action.currentUser,
                initFetching: false
            }
        case userActionKeys.fetchUserFailed:
            return {
                ...state,
                errorMsg: action.errorMsg,
                initFetching: false
            }
        case 'CLEAR_ERROR_MSG':
            return {
                ...state,
                errorMsg: null
            }
        default:
            return state;
    }
};