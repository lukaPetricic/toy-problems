function generateParenthesis (n) {
    let result = [];

    function tryAll(opened, closed, string) {
        if (string.length === n * 2) {
            result.push(string);
            return;
        }

         if (opened < n) tryAll(opened + 1, closed, string + '(')
         if (opened > closed) tryAll(opened, closed + 1, string + ')')
    }

    tryAll(0, 0, '')

    return result;
};

console.log(generateParenthesis(3))