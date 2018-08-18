/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return []

    // 从小到大排序
    nums = nums.sort((a, b) => {
        return a - b
    })
    let min = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < nums.length - 2; i++) {
        const head = nums[i]

        // 跳过相同数据
        if (i > 0 && head === nums[i-1]) continue

        // 设置头尾2个指针
        let lPos = i + 1
        let rPos = nums.length - 1
        while (lPos < rPos) {
            const sum = nums[lPos] + nums[rPos] + head
            const offset = sum - target
            if (offset === 0) {
                return target
            } else if (offset > 0) {

                // 使offset接近0
                rPos--
            } else {

                //使offset接近0
                lPos++
            }
            if (Math.abs(offset) < Math.abs(min - target)) {
                min = sum
            }
        }
    }
    return min
};