const colors = ['teal', 'cyan', 'peach', 'purple'];

function yell (val, i) {
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell); // callback forEach




// const prices = [30.99, 19.99, 2.5, 99.0];

// let total = 0;

// prices.forEach(function(price) { // anonymous forEach
//     total += price;
// });
// console.log(`the total for prices $${total}`);


// const prices = [30.99, 19.99, 2.5, 99.0];

// let total = 0;

// for(let price of prices){
//     total += price;
// }
// console.log(`the total for prices $${total}`);


// const arr = [4,5,6];
// let sum = 0;
// arr.forEach(function(num) {
//     sum += num;
    
// });
// console.log(`this is the sum of the numbers in the array ${sum}`);


function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i), arr;
    }
}

forEach(colors, function(color, i) {
    console.log(color.toUpperCase(), 'at index of:', i);
})

colors.forEach(function(color, i) {
    console.log(color.toUpperCase(), 'at index of:', i);
})




