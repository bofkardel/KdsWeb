import {
    checkStatus
} from './tools'

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

export default class ApiBuilder {

    static build(url, paras) {

        if (!paras) paras = {}
        if (!paras.headers) paras.headers = headers
        paras.mode = 'cors'
        paras.credentials = 'include'
        return fetch(url, paras)
            .then(res => res.json())
            .catch(e => e);
    }
}