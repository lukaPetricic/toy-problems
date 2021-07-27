/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// var divideInWindows = function(string, numRows) {
//   var windows = [];
//   var index = 0;

//   while (index < string.length) {
//     windows.push(string.slice(index, index + numRows))
//     index += numRows;
//   }

//   return windows;
// }

// var formatToRows = function(string, windowSize) {
//   var rows = [[string[0]]];
//   var count = 1

//   while (count < windowSize / 2) {
//     rows.push([(string[count] || ''), (string[windowSize - count] || '')])
//     count++;
//   }

//   rows.push([string[count] || ''] )
//   return rows;
// }

// var convert = function (s, numRows) {
//   if (numRows === 1 || numRows >= s.length) return s;
//   var result = '';
//   var windowSize = (numRows - 1) * 2;

//   var windows = divideInWindows(s, windowSize);
//   var rows = windows.map(window => formatToRows(window, windowSize))

//   for (let i = 0; i < rows[0].length; i++) {
//     for(let j = 0; j < rows.length; j++) {
//       if (rows[j][i]) {
//         result += rows[j][i].join('')
//       }
//     }
//   }

//   return result;
// };

var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let result = '';
  let windowSize = ((numRows - 1) * 2) || 1;
  let count = 1;

  for (let i = 0; i < numRows; i++) {
    let current = i;

    while (current < s.length) {
      if (i === 0 || i === numRows - 1) {
        console.log(current)
        result += s[current];
        current += windowSize
      } else {
        result += s[current];
        result += s[current + windowSize - i * 2] || ''
        current += windowSize
      }
    }
  }

  return result;
}