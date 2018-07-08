import store from '../redux/create-store';

export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    if (response.status === 401) {
        if (response.url.includes(`/login?q=`) || response.url.includes(`/users/auth`)) {
            response.message = '用户不存在或者密码错误！'
            return response
        } else {
            store.dispatch({
                type: 'UNAUTHORIZED'
            });
        }
    }
    const errMsg = (response.status === 502) ? '服务器升级中，请稍后再试' : response._bodyText
    const error = new Error(errMsg);
    error.response = response;
    throw error;
}

export function formatAlertMessage(msg) {
    if (!msg) {
        return '服务器升级中，请稍后再试'
    } else if (msg.error_code) {
        return msg;
    } else {
        return msg
    }
}