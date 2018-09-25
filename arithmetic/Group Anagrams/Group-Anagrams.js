/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const ret = {};

    strs.forEach(str => {
        const sortedStr = getSortedStr(str);
        if (ret[sortedStr]) {
            ret[sortedStr].push(str);
        } else {
            ret[sortedStr] = [str];
        }
    });

    return Object.values(ret);
};

function getSortedStr(str) {
    return str.split('').sort().join('');
}