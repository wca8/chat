// import { BASE_URL, TIMEOUT } from "./config";
// import { BASE_URL, TIMEOUT } from "./config";
const BASE_URL='http://140.249.176.146:6789/api/changan'
const request = (url = '', date = {}, type = 'GET', header = {
}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: type,
            url:  BASE_URL + url,
            data: date,
            header: header,
            dataType: 'json',         
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;		
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}
export default request