/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const strArr = ['$', '#',...s.split('').join('#') ,"#"]
    let center = 0
    let maxR = 0 // 最右端的索引
    let r = [0] // 半径
    for (let i = 1; i < strArr.length; i++) {
        if (i > maxR) {
            r.push(0)
        } else {
            r.push(Math.min(maxR - i, r[2 * center - i]))
        }
        while (strArr[i + r[i] + 1] === strArr[i - r[i] - 1]) {
            r[i]++
        }
        if (r[center] <= r[i]) {
            center = i
            maxR = i + r[i]
        }
    }
    return strArr.join('').substr(center - r[center], r[center] * 2 + 1).replace(/#/g, '')
};