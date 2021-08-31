// function threeSumClosest(nums: number[], target: number): number {
//     let closest = nums[0] + nums[1] + nums[2];
//     // iterate over the array
//     for (let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             for(let k = j + 1; k < nums.length; k++) {
//                 let sum = nums[i] + nums[j] + nums[k];
//                 if (isCloser(sum, target, closest)) closest = sum;
//             }
//         }
//         if (closest === target) return closest;
//     }
//     return closest;
// };
function isCloser(sum, target, currentClosest) {
    if (Math.abs(sum - target) < Math.abs(currentClosest - target))
        return true;
    return false;
}
function threeSumClosest(nums, target) {
    // sort the array
    var closest = nums[0] + nums[1] + nums[2];
    nums.sort(function (a, b) { return a - b; });
    // loop through the array
    for (var i = 0; i < nums.length - 2; i++) {
        // move two pointers accordingly
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            // check if the sum is closer
            var sum = nums[i] + nums[left] + nums[right];
            if (isCloser(sum, target, closest))
                closest = sum;
            if (sum > target) {
                right--;
            }
            else {
                left++;
            }
        }
    }
    return closest;
}
;
console.log(threeSumClosest([-1, 2, 1, -4], 1) === 2);
console.log(threeSumClosest([0, 0, 0], 1) === 0);
