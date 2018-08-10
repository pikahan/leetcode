/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
        let num = target - nums[i]
        if (set.has(num)) {
            return [nums.indexOf(num), i]
        }
        set.add(nums[i])
    }
};