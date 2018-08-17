/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []

    // 排序
    nums = nums.sort((a, b) => {
        return a - b
    })
    let ret = []
    for (let i = 0; i < nums.length - 2; i++) {
        const curr = nums[i]

        // 如果重复就进入下一次循环
        if (i > 0 && curr === nums[i-1]) continue
        const target = 0 - curr

        // 设置左右2个指针
        let lPos = i + 1;
        let rPos = nums.length - 1
        while (lPos < rPos) {
            let sum = nums[lPos] + nums[rPos]
            if (sum === target) {
                ret.push([curr, nums[lPos], nums[rPos]])
                lPos++
                rPos--

                // 去除重复的值
                while (lPos < rPos && nums[rPos] === nums[rPos+1]) {
                    rPos--
                }
                while (lPos < rPos && nums[lPos] === nums[lPos-1]) {
                    lPos++
                }
            }
            else if (sum > target) {

                // sum > target 所以将右指针左移移能接近target
                rPos--
            } else {

                // sum < target 所以将左指针右移能接近target
                lPos++
            }
        }
    }
    return ret
};