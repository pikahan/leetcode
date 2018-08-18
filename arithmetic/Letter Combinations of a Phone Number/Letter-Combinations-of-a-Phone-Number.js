/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        "2": 'abc',
        "3": 'def',
        "4": 'ghi',
        "5": 'jkl',
        "6": 'mno',
        "7": 'pqrs',
        "8": 'tuv',
        "9": 'wxyz',
    }
    if (digits.length < 1) return []
    const strList = digits.split('').map(digit => map[digit])
    let ret = strList.shift().split('')
    let str
    while (str = strList.shift()) {
        let temp = []
        for (let s of ret) {
            temp.push(...combine(s, str))
        }
        ret = temp
    }
    return ret
};
/*
    用str2中的每一个字符和str1组合
    输入 'ab','cd'
    输出 ['abc','abd']
*/
function combine(str1, str2) {
    const ret = []
    for (let ch of str2) {
        ret.push(str1 + ch)
    }
    return ret
}