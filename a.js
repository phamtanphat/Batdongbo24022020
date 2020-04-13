// function cong(cb) {
//     let a = 5
//     let b
//     setTimeout(() => {
//         b = 10
//         cb(a , b)
//     },1000)
// }
// cong((a , b) => {
//     console.log(a + b)
// })
const request = require('request');


// function getTempCity(cityName) { 
//     return new Promise((resolve , reject) => {
//         const url = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`
//         request(url, function (error, response, body) {
//            if(error) return reject(error)
//            if((JSON.parse(body).message)) return reject(JSON.parse(body).message)
//            return resolve(JSON.parse(body).main.temp)
//         });
//     })
 
// }
// getTempCity("phuquoc")
// .then(data => console.log(data))
// .catch(error => console.log("loi " +  error))

function cong(a , b) {
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(url,{json : true},function (error, response, body) {
            if(error) return reject(new Error("Lỗi do method cong" + error) )
            if(!body.success) return reject(body.message)
            return resolve(body.message)
        });
    })
}
function tru(a , b) {
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
        request(url,{json : true},function (error, response, body) {
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            return resolve(body.message)
        });
    })
}
function nhan(a , b) {
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
        request(url,{json : true},function (error, response, body) {
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            return resolve(body.message)
        });
    })
}
function chia(a , b) {
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
        request(url,{json : true},function (error, response, body) {
            if(error) return reject(error)
            if(!body.success) return reject(body.message)
            return resolve(body.message)
        });
    })
}

// function dientichHinhChuNhat(d , r){
//     nhan(d , r)
//     .then(tich => console.log(tich))
//     .catch(error => console.log(error))
// }
// dientichHinhChuNhat(5 , 10);

function chuviHinhChuNhat(d , r) {
    Promise.all([
        cong(d , r),
        nhan(d,2),
        handleName("hello")
    ])
    .then(arrayResult => console.log(arrayResult))
    .catch(error => console.log(error))
}

function handleName(key) {
    return Promise.resolve(key + "abc")
}
chuviHinhChuNhat(5 , 10)






