/* Write an ES2015 Version */
let arr = [1,2,3];
const double = arr => arr.map(val => val * 2);

let numbers = arr;
let squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);
    
