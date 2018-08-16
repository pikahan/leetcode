/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = { I: 1, V: 5, X: 10, L:50, C: 100, D: 500, M: 1000 }
    const reverseStr = s.split('').reverse()
    let pre = 0
    let result = 0
    for (let ch of reverseStr) {
        console.log({ch})
        result += map[ch] >= pre ? map[ch] : -map[ch]
        pre = map[ch]
    }

    return result
};