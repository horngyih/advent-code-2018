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

module.exports = {
    compose : compose,
    flatmap : flatmap,
    categorize : categorize,
    sum : sum
};
