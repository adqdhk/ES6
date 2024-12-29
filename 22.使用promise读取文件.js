//引入fs模块
const fs = require("fs");

//2.调用方法读取文件
// fs.readFile('./resources/静夜诗.md',(err,data) => {
//     //如果失败，抛出错误
//     if(err) throw err
//     //如果成功，输出内容
//     console.log(data.toString())
// })

//3.使用Promise封装
const p = new Promise((resolve, reject) => {
  fs.readFile("./resources/静夜诗.md", (err, data) => {
    //如果失败，抛出错误
    if (err) reject(err);
    //如果成功，输出内容
    resolve(data);
  });
});

p.then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log("文件读取失败！！", reason);
  }
);
