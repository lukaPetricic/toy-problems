function oneAway(word1: string, word2: string): boolean {
    if (Math.abs(word1.length - word2.length) > 1) return false;

    type Counter = {
        [key: string]: number
    }
    let counter: Counter = {};

    for (let i = 0; i < word1.length; i++) {
        let char = word1[i]
        if (counter[char]) {
            counter[char]++;
        } else {
            counter[char] = 1;
        }
    }

    let differences = word1.length === word2.length ? 0 : 1;

    for (let i = 0; i < word2.length; i++) {
        let char = word2[i]
        if (!counter[char]) differences++;
        if (counter[char]) counter[char]--;
        if (differences > 1) return false;
    }

    return true;
}

console.log(oneAway('pale', 'ple') === true);
console.log(oneAway('pales', 'pale') === true);
console.log(oneAway('pale', 'bale') === true);
console.log(oneAway('pale', 'bake') === false);