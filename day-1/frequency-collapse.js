const _fs = require("fs");
const _readline = require("readline");

let input_arr = [];
_readline.createInterface({input: _fs.createReadStream("input")})
    .on("line", line=>input_arr.push(line))
    .on("close", ()=>console.log(input_arr.reduce((sum,i)=>sum+parseInt(i),0)));
