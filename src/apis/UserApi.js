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

    static shopaccess(ipaddress){
        return ApiBuilder.build('/apis/smartpos/health',{
            method:'GET'
        })
    }

    static codeaccess(code){
        return ApiBuilder.build('/apis/smartpos/register/pos',{
            method:'POST',
            body: JSON.stringify({
                accessCode: code,
                uuid: "webuuid"
            }),
            headers: {
                "sanyi-version-code":"54",
                "sanyi-product-code":"1",
                 "Content-Type":"application/json",
                // "sanyi-product-code":productCode,
                // "sanyi-session-token":sessionToken,
            }
        })
    }

    static getshopdata(deviceId,shopId,versionCode,productCode){
        return ApiBuilder.build('/apis/smartpos/rest',{
            method:"GET",
            headers:{
                "sanyi-device-id":deviceId,
                "sanyi-shop-id":shopId,
                "sanyi-version-code":versionCode,
                "sanyi-product-code":productCode
            }
        })
    }


    static queryHistory(kdsid,deviceId,shopId,versionCode,productCode){
        return ApiBuilder.build('/apis/smartpos/kds/order/history/'+kdsid,{
            method:'GET',
            headers:{
                "sanyi-device-id":deviceId,
                "sanyi-shop-id":shopId,
                "sanyi-version-code":versionCode,
                "sanyi-product-code":productCode
            }
        })
    }

}