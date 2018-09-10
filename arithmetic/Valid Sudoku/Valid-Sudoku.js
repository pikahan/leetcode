/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const column = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const box = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    for (let i = 0; i < 9; i++) {
        for (let j = 0 ; j < 9; j++) {
            const digit = board[i][j];
            if (digit !== '.') {
                const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (row[i][digit] || column[j][digit] || box[k][digit]) {
                    return false;
                }

                row[i][digit] = column[j][digit] = box[k][digit] = 1;
            }
        }
    }
    return true;
};