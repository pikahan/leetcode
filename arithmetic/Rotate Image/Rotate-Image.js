/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (j > i) {
                const temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }

    matrix.forEach(arr => {
        for (let i = 0; i < Math.floor(len / 2); i++) {
            const temp = arr[i];
            arr[i] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }
    })
};