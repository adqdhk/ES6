const fs = require('fs')

// fs.readFile('./resources/春晓.md',(err,data1) => {
//     fs.readFile('./resources/望庐山瀑布.md',(err,data2) => {
//         fs.readFile('./resources/静夜诗.md',(err,data3) => {
//             console.log(data1 + '\r\n' + data2 + '\r\n' + data3)
//         })
//     })
// })

//使用Promise实现
const p = new Promise((resolve,reject) => {
    fs.readFile('./resources/春晓.md',(err,data) => {
        resolve(data)
    })
})

p.then(value => {
    return new Promise((resolve,reject) => {
        fs.readFile('./resources/望庐山瀑布.md',(err,data) => {
            resolve([value,data])
        })
    })
}).then(value => {
    return new Promise((resolve,reject) => {
        fs.readFile('./resources/静夜诗.md',(err,data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join('\r\n'))
})