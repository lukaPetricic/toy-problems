function palindromePermutation(string) {
    var counter = {};
    //Load the counter
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (!/[a-zA-Z]/.test(char))
            continue;
        if (counter[char]) {
            counter[char]++;
        }
        else {
            counter[char] = 1;
        }
    }
    //Check if all letters have their coupe (1 exception allowed - middle)
    var middle = 0;
    for (var char in counter) {
        if (counter[char] % 2 > 0)
            middle++;
        if (middle > 1)
            return false;
    }
    return true;
}
console.log(palindromePermutation('tact coa') === true);
console.log(palindromePermutation('tact coal') === false);
console.log(palindromePermutation('baoba') === true);
console.log(palindromePermutation('ana voli milovana') === true);
console.log(palindromePermutation('ana voli milovanak') === false);
