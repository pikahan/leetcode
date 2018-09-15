/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ret = [];
    candidates.sort((a, b) => a - b);

    const find = (arr, index, sum) => {
        for (let i = index; i < candidates.length; i++) {
            let candidate = candidates[i];
            if (candidate === sum) {
                return ret.push(arr.concat(candidate));
            } else if (candidate < sum) {
                find(arr.concat(candidate), i, sum - candidate);
            } else {
                return;
            }
        }
    }

    for (let i = 0; i < candidates.length; i++) {
        let candidate = candidates[i];
        if (candidate === target) {
            ret.push([candidate]);
        } else if (candidate > target) {
            return ret;
        } else {
            find([candidate], i, target - candidate);
        }
    }

    return ret;
};