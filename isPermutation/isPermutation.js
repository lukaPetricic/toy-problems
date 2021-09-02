function isPermutation(word1, word2) {
    if (word1.length !== word2.length)
        return false;
    var counter = {};
    for (var _i = 0, _a = word1.split(''); _i < _a.length; _i++) {
        var char = _a[_i];
        if (counter[char]) {
            counter[char]++;
        }
        else {
            counter[char] = 1;
        }
    }
    for (var _b = 0, _c = word2.split(''); _b < _c.length; _b++) {
        var char = _c[_b];
        if (!counter[char]) {
            return false;
        }
        else if (counter[char] > 1) {
            counter[char]--;
        }
        else {
            delete counter[char];
        }
    }
    if (Object.keys(counter).length > 0)
        return false;
    return true;
}
console.log(isPermutation('abc', 'cab') === true);
console.log(isPermutation('abca', 'cabb') === true);
console.log(isPermutation('abcde', 'abdfe') === true);
