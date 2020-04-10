
function cong(cb) {
    let a = 5
    let b
    setTimeout(() => {
        b = 10
        cb(a , b)
    },1000)
}
cong((a , b) => {
    console.log(a + b)
})

