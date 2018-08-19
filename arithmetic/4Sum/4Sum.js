/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.length
    if (len < 4) return []
    nums = nums.sort((a, b) => {
        return a - b
    })
    const ret = []
    for (let i = 0; i < len - 3; i++) {
        const firstNum = nums[i]
        if (i > 0 && firstNum === nums[i - 1]) continue
        const threeTarget = target - firstNum
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            let lPos = j + 1
            let rPos = len - 1
            while (lPos < rPos) {
                const threeSum = nums[j] + nums[lPos] + nums[rPos]
                if (threeSum === threeTarget) {
                    ret.push([firstNum, nums[j], nums[lPos], nums[rPos]])
                    lPos++
                    rPos--
                    while (nums[lPos] === nums[lPos - 1]) {
                        lPos++
                    }
                    while (nums[rPos] === nums[rPos + 1]) {
                        rPos--
                    }
                } else if (threeSum > threeTarget) {
                    rPos--
                } else {
                    lPos++
                }
            }
        }
    }
    return ret
};