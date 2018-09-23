/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length < 2) {
        return [nums];
    }
    
    const ret = [];

    const permutate = (arr, rest) => {
        if (rest.length === 1) {
            return ret.push(arr.concat(rest));
        }

        for (let i = 0; i < rest.length; i++) {
            const tempArr = rest.slice();
            const first = tempArr.splice(i, 1);
            permutate(arr.concat(first), tempArr);
        }
    }
    permutate([], nums);

    return ret;
};