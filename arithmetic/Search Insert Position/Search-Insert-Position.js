/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let pos = 0;
    while (typeof nums[pos] !== 'undefined' && nums[pos] < target) {
        pos++;
    }
    return pos
};