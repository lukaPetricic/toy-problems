/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if (n === 0 || x === 1) return 1;
    if (x === -1) return n % 2 > 0 ? x : x * -1; 

    let result = n > 0 ? x : 1/x;
    let multiplier = result;;
    for (let i = 0; i < Math.abs(n) - 1; i++) {
        result = result * multiplier;
        if (result === Infinity) return Infinity;
        if (result === 0) return 0;
    }

    return result;
};

let x = 1;
let n = 2147483648;

console.log(myPow(x, n));
console.log(x**n)
console.log(myPow(x, n) === x**n);

