/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length
    let pos = len - 2
    let temp
    while (pos >= 0) {
        let min = pos + 1
        for (let j = pos+1; j < len; j++) {
            if (nums[min] > nums[j] && nums[j] > nums[pos]) min = j
        }
        if (nums[min] > nums[pos]) {
            temp = nums[min]
            nums[min] = nums[pos]
            nums[pos] = temp
            sort(nums, pos+1)
            return
        }
        pos--
    }
    sort(nums, 0)
};

function sort(arr, start) {
    let temp
    for (let i = start; i < arr.length-1; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
}