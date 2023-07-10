const words = [
    'immunoelectrophoretically',
    'ratovator',
    'tsktsk',
    'psychophysicotherapeutics',
    'squirrelled',
    'crypt',
    'uncopyrightable',
    'cysts',
    'pseudopseudohypoparathyroidism',
    'unimaginatively'
];

const longWords = words.filter(function(word) {
    return word.length >= 20;
});

const cOrUWords = words.filter(function(w){
    return w[0] === 'u' || w[0] === 'c';
});


const containsVowel = function(word) {
    for(let char of word){
        if(isVowel(char)) return true;
    }
    return false;
}

const isVowel = function(char){
    return 'aeiou'.indexOf(char) !== -1;
}

const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word){
    return !containsVowel(word);
});

const arr = [1,100,200,1000,300];


function myFilter(arr, callback) {
    const filteredArray = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

const shorties = myFilter(words, function(word){
    return word.length <= 10;
});

const everyOtherWord = myFilter(words, function(word, i){
    return i % 2 === 0;
})