/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome (s) {
    let largestPal = '';
    //iterate over the string - for each char
    for(let i = 0; i < s.length; i++) {
        //create currentPal and j
        let currentPal = s[i];
        let j = 1;

        if (s[i] === s[i + 1]) {
            currentPal += s[i];
            while (s[i - j] === s[i + j + 1] && (j + i < s.length && i - j > -1)) {
                //add them to currentPal
                currentPal = s[i - j] + currentPal + s[i + j + 1];
                //increment j
                j++;
            }
    
            //if larger then largestPal
            if (currentPal.length > largestPal.length) {
                //update largestPal
                largestPal = currentPal;
            }
        }

        currentPal = s[i];
        j = 1;

        //while left end right char are same
        while (s[i - j] === s[i + j] && (j + i < s.length && i - j > -1)) {
            //add them to currentPal
            currentPal = s[i - j] + currentPal + s[i + j];
            //increment j
            j++;
        }

        //if larger then largestPal
        if (currentPal.length > largestPal.length) {
            //update largestPal
            largestPal = currentPal;
        }
    }

    return largestPal;
};

let test = 'ccccc'
console.log(longestPalindrome(test))