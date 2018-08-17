/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    const result = [];
    let step = 1, row = 0;
    for(let i = 0; i < s.length; i++){
        if (result[row] === undefined) { 
            result[row] = '';
        }
        result[row] += s[i];
        if (row === 0){ 
            step = 1;
        } else if (row === numRows - 1){
            step = -1;
        }
        row += step;
    }
    return result.join('');
};