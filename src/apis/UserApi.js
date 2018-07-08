import {
    BASE_URL
} from './api-config'
import ApiBuilder from './ApiBuilder';

export default class UserApi {

    static login(username, password) {
        return ApiBuilder.build(`${BASE_URL}/enter`, {
            method: 'POST',
            body: JSON.stringify({
                name: username,
                password: password
            })
        })
    }

    static logout(username, password) {
        return ApiBuilder.build(`${BASE_URL}/quit`, {
            method: 'GET'
        })
    }

    static fetchCurrentUserInfo() {
        return ApiBuilder.build(`${BASE_URL}/show/account/info`, {
            method: 'GET'
        })
    }

    

}