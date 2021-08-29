/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    if (nums.length <= 1) return;
    let smallest = nums[nums.length - 1];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {
            let smallestLarger = nums[i];
            smallestIdx = i;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < smallestLarger && nums[j] > nums[i - 1]) {
                    smallestLarger = nums[j];
                    smallestIdx = j;
                }
            }
            swap(nums, i - 1, smallestIdx);
            sortRestOfArray(nums, i);
            return;
        }
    }

    nums.sort((a, b) => a - b);
};

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sortRestOfArray(arr, start) {
    let holder = [];

    while (arr.length - 1 >= start) {
        holder.push(arr.pop());
    }
    holder.sort((a, b) => a - b);
    console.log(holder)

    while (holder.length) {
        arr.push(holder.shift());
    }
}

var array = [1, 2, 3];
nextPermutation(array);
console.log(array);
array = [3, 2, 1];
nextPermutation(array);
console.log(array);
array = [1, 1, 5];
nextPermutation(array);
console.log(array);
array = [11,12,0,27,3,11,21,9,0,15,26,27,17,24,0,16,4,17,14,8,15,8,2,16,10,6,6,24,16,2,18,19,6,10,17,10,21,0,11,13,7,7,2,16,24,25,2,20,12,9,20,19];
nextPermutation(array);
// console.log(array);


