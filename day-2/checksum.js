const _fs = require("fs");
const _readline = require("readline");
const _tools = require("../common/tools.js");

let input = [];
_readline.createInterface({ input : _fs.createReadStream("input") })
    .on("line", line=>{ if(line)input.push(line) } )
    .on("close", ()=>checksum(input) );

function checksum( input ){
    let processInput = _tools.compose(
        str=>str.split(''),
        _tools.categorize,
        _tools.values,
        i=>_tools.categorize(i, j=>j.length ),
        Object.keys,
        i=>i.map( i=> parseInt(i) ).filter( i=>i===2||i===3 )
    );

    let processResults = _tools.compose(
        _tools.flatmap,
        _tools.categorize,
        _tools.values,
        i=>i.map(i=>i.length).reduce( (checksum,i)=>checksum*i, 1 )
    );
    console.log( processResults(input.map( processInput )) );
}
