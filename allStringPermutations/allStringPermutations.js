let counter = 0;
function allStringPermutations(str) {
    counter++;
    if (str.length === 1) return [str];

    let result = [];

    let currentChar = str[str.length - 1];
    allStringPermutations(str.slice(0, str.length - 1)).forEach(smaller => {
        for(let i = 0; i <= smaller.length; i++) {
            let newWord = smaller.slice(0, i) + currentChar + smaller.slice(i, smaller.length);
            result.push(newWord);
        }
    })

    return result;
}

allStringPermutations('abcdefghj')
console.log(counter)