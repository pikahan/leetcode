/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    if (n === -1) {
        return 1 / x;
    }

    return n % 2 === 0
        ? myPow(x * x, Math.floor(n / 2))
        : myPow(x * x, Math.floor(n / 2)) * x;
};