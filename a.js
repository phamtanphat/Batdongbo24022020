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


function getTempCity(cityName , cb) { 
    const url = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`
    request(url, function (error, response, body) {
       if(error) return cb(error)
       if((JSON.parse(body).message)) return cb(JSON.parse(body).message)
       return cb(JSON.parse(body).main.temp)
    });
}
getTempCity("hanoi",(error , temp) => {
    if(error) return console.log(error)
    return console.log(temp)
})
