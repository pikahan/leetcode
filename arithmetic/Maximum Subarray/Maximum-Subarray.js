/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + (dp[i-1] > 0 ? dp[i-1] : 0);
        maxSum = Math.max(dp[i], maxSum);
    }
    return maxSum;
};