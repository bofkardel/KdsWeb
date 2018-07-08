import {
    all,
    takeLatest
} from 'redux-saga/effects'
import userActionKeys from './user/userActionKeys';
import userSagas from './user/userSagas';

function* rootSaga() {
    yield all([
        //用户相关
        takeLatest(userActionKeys.login, userSagas.login),
        takeLatest(userActionKeys.logout, userSagas.logout),
        takeLatest(userActionKeys.fetchCurrentUserInfo, userSagas.fetchCurrentUserInfo),


    ]);
}

export default rootSaga;