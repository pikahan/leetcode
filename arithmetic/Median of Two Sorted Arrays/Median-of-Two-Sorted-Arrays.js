/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length
    let n = nums2.length

    // 使用解构赋值的话性能会差一点
    if (m > n) {
        [m, n] = [n, m]
        ;[nums1, nums2] = [nums2, nums1]
    }

    let iMin = 0
    let iMax = m
    let mid_len = Math.floor((m + n + 1) / 2)
    let min_right, max_left
    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2)
        let j = mid_len - i
        if (i !== m && nums2[j - 1] > nums1[i]) {
            iMin = i + 1
        } else if (i !== 0 && nums1[i - 1] > nums2[j]) {
            iMax = i - 1
        } else {
            if (i === 0) {
                max_left = nums2[j - 1]
            } else if (j === 0) {
                max_left = nums1[i - 1]
            } else {
                max_left = Math.max(nums1[i - 1], nums2[j - 1])
            }

            if ((m + n) % 2 === 1) return max_left

            if (i === m) {
                min_right = nums2[j]
            } else if (j === n) {
                min_right = nums1[i]
            } else {
                min_right = Math.min(nums1[i], nums2[j])
            }
            return (max_left + min_right) / 2
        }
    }
};