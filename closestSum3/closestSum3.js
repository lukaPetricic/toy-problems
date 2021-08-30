function threeSumClosest(nums, target) {
    var closest = nums[0] + nums[1] + nums[2];
    // iterate over the array
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                var sum = nums[i] + nums[j] + nums[k];
                if (isCloser(sum, target, closest))
                    closest = sum;
            }
        }
        if (closest === target)
            return closest;
    }
    return closest;
}
;
function isCloser(sum, target, currentClosest) {
    if (Math.abs(sum - target) < Math.abs(currentClosest - target))
        return true;
    return false;
}
console.log(threeSumClosest([-1, 2, 1, -4], 1) === 2);
console.log(threeSumClosest([0, 0, 0], 1) === 0);
