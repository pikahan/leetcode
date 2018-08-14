/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newArr = [...nums1, ...nums2].sort((a,b) => {
        return a - b
    })
    let len = newArr.length
    const pos = parseInt(len/2)
    if (len % 2) return newArr[pos]
    return (newArr[pos-1] + newArr[pos]) / 2
};