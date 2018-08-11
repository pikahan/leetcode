/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length
    let maxLen = 0
    let lPos = 0
    let rPos = 0
    let set = new Set()
    let subStr = '', ch
    do {
        ch = s[rPos]
        if (set.has(ch)) {
            if (subStr.length > maxLen) {
                maxLen = subStr.length
            }
            lPos++
            subStr = s.substring(lPos, rPos)
            set = new Set([...subStr])
        } else {
            subStr += ch
            set.add(ch)
            rPos++
        }
    } while (rPos !== len)

    if (subStr.length > maxLen) return subStr.length

    return maxLen
};

console.log(lengthOfLongestSubstring('pwwkew'))


