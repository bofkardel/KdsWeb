import {
    call,
    put
} from 'redux-saga/effects'
import UserApi from '../../apis/UserApi'
import {
    formatAlertMessage
} from '../../apis/tools';
import userActionKeys from './userActionKeys';
import history from '../../main/history';

export function* login(action) {
    try {
        const result = yield call((action) => {
            return UserApi.login(action.username, action.password);
        }, action);
        if (result && result.id && result.email) {
            yield put({
                type: userActionKeys.loginSuccessful,
                loginInfo: result
            });
        } else {
            yield put({
                type: userActionKeys.fetchUserFailed,
                errorMsg: formatAlertMessage(result)
            });
        }
    } catch (e) {
        yield put({
            type: userActionKeys.fetchUserFailed,
            errorMsg: formatAlertMessage(e.message)
        });
    }
}

export function* logout(action) {
    try {
        const result = yield call((action) => {
            return UserApi.logout();
        }, action);
        if (result === 201) {
            yield put({
                type: userActionKeys.logoutSuccessful
            });
            history.push("/login");
        } else {
            yield put({
                type: userActionKeys.fetchUserFailed,
                errorMsg: formatAlertMessage(result)
            });
        }
    } catch (e) {
        yield put({
            type: userActionKeys.fetchUserFailed,
            errorMsg: formatAlertMessage(e.message)
        });
    }
}


export function* fetchCurrentUserInfo(action) {
    try {
        const result = yield call((action) => {
            return UserApi.fetchCurrentUserInfo();
        }, action);
        if (result && result.id && result.name) {
            yield put({
                type: userActionKeys.fetchCurrentUserInfoSuccessful,
                currentUser: result,
            });
        } else {
            yield put({
                type: userActionKeys.fetchUserFailed,
                errorMsg: formatAlertMessage(result)
            });
        }
    } catch (e) {
        yield put({
            type: userActionKeys.fetchUserFailed,
            errorMsg: formatAlertMessage(e.message)
        });
    }
}



export default {
    fetchCurrentUserInfo,
    login,
    logout
}