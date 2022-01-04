const fs = require('fs')

function read(url) {
    return new Promise((resolve,reject) => {
        fs.readFile(url,(err,data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
}

//声明一个async函数
async function main() {
    let cx = await read('./resources/春晓.md')
    let jys = await read('./resources/静夜诗.md')
    let wlspb = await read('./resources/望庐山瀑布.md')

    console.log(cx.toString());
    console.log(jys.toString());
    console.log(wlspb.toString());
}

main()