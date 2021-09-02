function isPermutation(word1: string, word2:string): boolean {
    if (word1.length !== word2.length) return false;

    type Counter = {
        [key: string]: number
    }

    let counter: Counter = {};

    for (let char of word1.split('')) {
        if (counter[char]) {
            counter[char]++
        } else {
            counter[char] = 1;
        }
    }

    for (let char of word2.split('')) {
        if (!counter[char]) {
            return false;
        } else if (counter[char] > 1) {
            counter[char]--;
        } else {
            delete counter[char];
        }
    }

    if (Object.keys(counter).length > 0) return false;
    return true;
}

console.log(isPermutation('abc', 'cab') === true)
console.log(isPermutation('abca', 'cabb') === true)
console.log(isPermutation('abcde', 'abdfe') === true)