import userActionKeys from './userActionKeys';

export const fetchCurrentUserInfo = () => {
    return {
        type: userActionKeys.fetchCurrentUserInfo
    }
};

export const login = (username, password) => {
    return {
        type: userActionKeys.login,
        username: username,
        password: password,
    }
};

export const logout = () => {
    return {
        type: userActionKeys.logout,
    }
};