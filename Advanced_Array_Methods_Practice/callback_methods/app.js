// types of functions

function holler() { // function decloration
    console.log('HEY YOU!');
}

const whisper = function() { // function expression, stored in a variable. to execute add ()
    console.log('pssst hey you...');
}


// helpers for doMath?
function add(x,y) { 
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

const mathFuncs = [add, subtract, multiply, divide];


// template?
function doMath(a,b,mathFunc) {
    return mathFunc(a,b)
}

function doAllMath(a,b,mathFuncs) {
    for(let func of mathFuncs) { // loops over the mathFuncs array
        console.log(func(a,b));
    }
}

