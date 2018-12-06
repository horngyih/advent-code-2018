const _fs = require("fs");
const _readline = require("readline");

let input_arr = [];

function processArray( arr ){
    console.log( `Input Array length ${arr.length}` );
    let frequencyMap = {};

    frequencyMap['0']=(frequencyMap['0']||0) + 1;

    let iteration = 1;
    let i = 0;
    let sum = 0;
    let frequencyFound = false;
    while( !frequencyFound ){
        let prev = i;
        let prevSum = sum;
        let newFrequency = parseInt(arr[i]);
        sum = sum + newFrequency;
        i = ( i + 1 ) % (arr.length);
        frequencyMap[''+sum]=(frequencyMap[''+sum]||0) + 1;
        frequencyFound =  Object.keys(frequencyMap).map(i=>frequencyMap[i]).filter(i=>i===2).length > 0;
//        console.log(`Iteration ${iteration}; Current: ${prev}; Sum: ${prevSum}; Frequency : ${newFrequency}; New Sum : ${sum}; Next : ${i}; Found ${frequencyFound} in ${Object.keys(frequencyMap).length} sums` );
        iteration++;
    }
    console.log( `Second Frequency Sum Occurrence at ${sum}` );
    return sum;
}

_readline.createInterface({input: _fs.createReadStream('input')})
    .on('line', line=>{ if(line){ input_arr.push(line)}})
    .on('close', ()=>processArray(input_arr));
