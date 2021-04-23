const Fs = require('fs');
const Axios = require('axios');
const FormData = require('form-data');


/**
 * file path
 */
const file = ""

/**
 * generate token in web profile
 */
const token = "";

/**
 * document type
 */
const type = 'ktp';


const url = 'https://api.aksarakan.com/document';

if(!file) {
    throw new Error('file is not set');
}

if(!token) {
    throw new Error('token is not set');
}


const formData = new FormData();
formData.append('file', Fs.createReadStream(file));

const headers = {
    Authentication: "Bearer " + token,
}

Axios.request({
    method : 'PUT',
    headers : Object.assign(headers, formData.getHeaders()),
    url : url + '/' + type,
    data : formData
}).then(function (data){
    console.log(data.data);
});
