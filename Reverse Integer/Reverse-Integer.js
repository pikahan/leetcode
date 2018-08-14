/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const neg = x >= 0 ? '' : '-'
    x = x > 0 ? x : -x
    const ret = parseInt(neg + String(x).split('').reverse().join(''))
    if (ret < - 2147483648 || ret > 2147483647) return 0
    return ret
};