/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return [];
    }
    
    let rowLength = matrix[0].length;
    let columnLength = matrix.length;
    const ret = [];

    let counter = rowLength * columnLength;
    let top = 0,
        left = 0,
        right = rowLength-1,
        bottom = columnLength-1;
    while (true) {
        for (let j = left; j <= right; j++) {
            ret.push(matrix[top][j]);
            counter--;
        }

        if (counter === 0) {
            return ret;
        }

        top++;

        for (let j = top; j <= bottom; j++) {
            ret.push(matrix[j][right]);
            counter--;
        }

        if (counter === 0) {
            return ret;
        }

        right--;

        for (let j = right; j >= left; j--) {
            ret.push(matrix[bottom][j]);
            counter--;
        }

        if (counter === 0) {
            return ret;
        }

        bottom--;

        for (let i = bottom; i >= top; i--) {
            ret.push(matrix[i][left]);
            counter--;
        }

        if (counter === 0) {
            return ret;
        }

        left++;
    };    
};