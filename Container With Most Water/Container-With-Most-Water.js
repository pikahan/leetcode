/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let ret = 0
    let sum
    while (left < right) {
        let lValue = height[left]
        let rValue = height[right]
        sum = (right - left) * Math.min(lValue, rValue)
        if (sum > ret) ret = sum
        if (lValue < rValue) {
            do {
                left++
            } while (height[left] <= lValue && left < right)
        } else {
            do {
                right--
            } while (height[right] <= rValue && left < right)
        }
    }
    return ret
};