/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length
    if (len < 2) return len

    let pos = 0
    let ch
    let index
    let subStr = ''
    let maxLen = 0
    while (pos !== len) {
        ch = s.charAt(pos)
        index = subStr.indexOf(ch)

        if (index === -1) {
            pos++
            subStr += ch
            maxLen = Math.max(subStr.length, maxLen)
        } else {
            subStr = subStr.slice(index+1)
        }
    }
    return maxLen
};
