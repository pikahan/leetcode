/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0,
        right = nums.length;
    
    while (left < right) {
        let mid = parseInt((left + right) / 2);

        let num = (nums[mid] < nums[0]) === (target <= nums[0]) ?
            nums[mid] :
            (target > nums[0] ? Infinity : -Infinity);

        if (num > target) {
            right = mid;
        } else if (num < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};