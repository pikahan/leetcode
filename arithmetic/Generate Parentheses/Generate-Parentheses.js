/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ret = []
    const backtrack = (str = '', left = 0, right = 0) => {
        if (str.length === 2 * n) {
            ret.push(str)
            return
        } 
        if (left < n) {
            backtrack(str + '(', left+1, right)
        }
        if (left > right) {
            backtrack(str + ')', left, right+1)
        }
    }
    backtrack()
    return ret
};
