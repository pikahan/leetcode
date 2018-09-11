/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }
    return count('1', n - 1);
};

function count(str, n) {
    let pos = 0;
    let ret = '';
    while (pos < str.length) {
        let ch = str.charAt(pos);
        let counter = 1;
        pos++
        while (str.charAt(pos) === ch) {
            pos++;
            counter++;
        }
        ret += `${counter}${ch}`;
    }
    n--;
    if (!n) {
        return ret;
    } else {
        return count(ret, n);
    }
}