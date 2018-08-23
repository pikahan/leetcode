/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len = needle.length
    if (len === 0 || haystack === needle) return 0
    let c = needle.charAt(0)
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, len) === needle) return i
    }
    return -1
};