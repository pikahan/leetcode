/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const ret = [];
    nums = nums.sort((a, b) => a - b);
    const permute = (arr, rest) => {
        let last = null;

        if (rest.length < 2 || (rest.length === 2 && rest[0] === rest [1])) {
            return ret.push([...arr, ...rest]);
        }

        for (let i = 0; i < rest.length; i++) {
            const tempArr = rest.slice();
            const first = tempArr.splice(i, 1);
            if (first[0] === last) {
                continue;
            }

            permute(arr.concat(first), tempArr);
            last = first[0];
        }
    }

    permute([], nums);
    return ret;
};