/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const ret = [];

    const find = (index, arr, sum) => {
        let last = null;
        for (let i = index; i < candidates.length; i++) {
            const candidate = candidates[i];
            if (last === candidate) {
                continue;
            }
            if (candidate < sum) {
                find(i + 1, arr.concat(candidate), sum - candidate);
            } else if (candidate === sum) {
                return ret.push(arr.concat(candidate));
            } else {
                return;
            }
            last = candidate;
        }
    };

    let last = null;
    for (let i = 0; i < candidates.length; i++) {
        const candidate = candidates[i];
        if (candidate === last) {
            continue;
        }
        if (candidate < target) {
            find(i + 1, [candidate], target - candidate);
        } else if (candidate === target) {
            ret.push([candidate]);
        } else {
            return ret;
        }
        last = candidate;
    }

    return ret;
};