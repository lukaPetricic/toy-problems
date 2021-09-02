"use strict";
function isUniqueNoHash(string) {
    let arrayOfLetters = string.split('');
    arrayOfLetters.sort();
    for (let i = 0; i < arrayOfLetters.length; i++) {
        if (arrayOfLetters[i] === arrayOfLetters[i + 1])
            return false;
    }
    return true;
}
console.log(isUniqueNoHash('abcdefg') === true);
console.log(isUniqueNoHash('abcdefgc') === false);
console.log(isUniqueNoHash('abcdefgDGA') === true);
