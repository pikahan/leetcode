/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 1) return 0
    let pos = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[pos]) {
            nums[pos+1] = nums[i]
            pos++
        }
    }
    return pos+1
};