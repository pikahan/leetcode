/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    let ret = ''
    let pos = 0
    const len = Math.min(...strs.map(str => str.length))
    let ch
    while (pos < len) {
        ch = strs[0].charAt(pos)
        for (let i = 0; i < strs.length; i++) {
            if (ch !== strs[i].charAt(pos)) return ret
        }
        ret += ch
        pos++
    }
    return ret
};