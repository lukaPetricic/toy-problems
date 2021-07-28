/**
 * @param {string[]} strs
 * @return {string}
 */

var getCommonPrefix = function (str1, str2) {
  var common = '';
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      common += str1[i];
    } else {
      break;
    }
  }

  return common;
}

var longestCommonPrefix = function (strs) {
  var currentLongest = strs[0];

  for (word of strs) {
    currentLongest = getCommonPrefix(currentLongest, word)
  }

  return currentLongest;
};

// console.log(longestCommonPrefix(["dog","racecar","car"]))