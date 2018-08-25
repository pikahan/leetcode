/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length
    let i = len - 2
    while (i >= 0 && nums[i+1] <= nums[i]) {
        i--
    }
    if (i >= 0) {
        let j = nums.length - 1
        while (j >= 0 && nums[j] <= nums[i]) {
            j--
        }
        swap(nums, i, j)
    }
    reverse(nums, i + 1)
};

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function reverse(arr, start) {
    let temp
    let i = start, j = arr.length - 1
    while (i < j) {
        swap(arr, i, j)
        i++
        j--
    }
}