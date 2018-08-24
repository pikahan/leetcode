/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const mask = 0x80000000
    let neg = (mask & dividend) !== (mask & divisor)
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let ret = 0
    while(dividend >= divisor) {
        let exp = 1
        let base = divisor
        while (base <= (dividend >> 1)) {
            base = base << 1
            exp = exp << 1
        }
        ret += exp
        dividend -= base
    }
    ret = neg ? -ret : ret
    if (ret > 2147483647 || ret < -2147483648) ret = 2147483647
    return ret
};