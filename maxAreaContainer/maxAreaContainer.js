/**
 * @param {number[]} height
 * @return {number}
 */

// var maxArea = function (height) {
//   var getContainerSize = function (a, b)  {
//     var aSide = Math.min(height[a], height[b]);
//     var bSide = Math.abs(a - b);
//     return aSide * bSide;
//   }

//   var currentLargestContainer = getContainerSize(0, 1);
//   var currBeginningIdx = 0;
//   var potentialHigherIdx = 0;

//   for (let i = 1; i < height.length; i++) {
//     //check if adding current as ending would be larger container
//     if (getContainerSize(currBeginningIdx, height[i]) > currentLargestContainer) {
//       currentLargestContainer = getContainerSize(currBeginningIdx, height[1]);
//     }

//     //check if updating with potential and current would be larger container
//     if (getContainerSize(potentialHigherIdx, height[i]) > currentLargestContainer) {
//       currentLargestContainer = getContainerSize(currBeginningIdx, height[1]);
//       currBeginningIdx = i;
//       potentialHigherIdx = i;
//     }

//     //check if the current is larger then current potential
//     if (height[i] * (height.lenght - 1 - i) > currentLargestContainer) {
//       potentialHigherIdx = i;
//     }
//   }

//   console.log(currentLargestContainer, currBeginningIdx, potentialHigherIdx)

//   return currentLargestContainer;
// };

var maxArea = function (height) {
  var maxArea = function (height) {
    var maxarea = 0
    var l = 0
    var r = height.length - 1;
    while (l < r) {
      maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
      if (height[l] < height[r])
        l++;
      else
        r--;
    }
    return maxarea;

  };
}