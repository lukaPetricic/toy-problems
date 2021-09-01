function isUniqueNoHash(string) {
    var arrayOfLetters = string.split('');
    arrayOfLetters.sort();
    for (var i = 0; i < arrayOfLetters.length; i++) {
        if (arrayOfLetters[i] === arrayOfLetters[i + 1])
            return false;
    }
    return true;
}
console.log(isUniqueNoHash('abcdefg') === true);
console.log(isUniqueNoHash('abcdefgc') === false);
console.log(isUniqueNoHash('abcdefgDGA') === true);
