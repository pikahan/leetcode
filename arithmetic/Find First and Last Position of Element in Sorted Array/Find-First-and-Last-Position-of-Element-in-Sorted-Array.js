/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0,
        right = nums.length,
        pos = -1;

    while (left < right) {
        let mid = parseInt((left + right) / 2);
        if (nums[mid] > target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
           pos = mid;
           break; 
        }
    }

    if (pos === -1) {
        return [-1, -1];
    }

    let lPos = pos,
        rPos = pos;
    
    while (nums[lPos-1] === target) {
        lPos--
    }
    while (nums[rPos+1] === target) {
        rPos++
    }
    return [lPos, rPos]
};