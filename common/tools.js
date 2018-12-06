function compose( ...fn ){
    return (arg)=>{
        return fn.reduce( (result,f)=>{
            return f(result);
        }, arg );
    }
}

function flatmap( arr ){
    if( Array.isArray( arr ) ){
        return arr.reduce( (arr,i)=> arr.concat(flatmap(i)), [] );
    } else {
        return arr;
    }
}


function asInt( i ){
    try{
        return ( parseInt(i) || 0 );
    } catch( error ){
        return 0
    }
}

function sum( arr ){
    if( Array.isArray( arr ) ){
        return arr.map(asInt).reduce( (sum,i)=> sum+i, 0 );
    } else {
        return asInt(arr);
    }
}

function categorize( arr, catFn ){
    fn = (typeof catFn === "function" )? catFn : i=>i;
    return arr.reduce( (state, i)=>{
        state[fn(i)] = (state[fn(i)]||[]).concat(i);
        return state;
    }, {} );
}

function values( obj ){
    if( typeof obj === "object" ){
        return Object.keys(obj).map(key=>obj[key]);
    } else {
        return obj;
    }
}

function levenshtein( str1, str2 ){
    if( str1.length === 0 ) return str2.length;
    if( str2.length === 0 ) return str1.length;

    let cost;

    if( str1[str1.length-1] === str2[str2.length-1] )
        cost = 0;
    else
        cost = 1;

    return Math.min(
        levenshtein(str1.substring(0, str1.length-1), str2 ) + 1,
        levenshtein(str1, str2.substring(0, str2.length-1) ) + 1,
        levenshtein(str1.substring(0, str1.length-1), str2.substring(0, str2.length-1) ) + cost
    );
}

module.exports = {
    compose : compose,
    flatmap : flatmap,
    categorize : categorize,
    sum : sum,
    values : values,
    levenshtein : levenshtein
};
