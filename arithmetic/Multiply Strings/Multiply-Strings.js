/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    const ret = [];
    const lengthOfNum1 = num1.length;
    const lengthOfNum2 = num2.length;
    for (let i = lengthOfNum1 - 1; i >= 0; i--) {
        for (let j = lengthOfNum2 - 1; j >= 0; j--) {
            const n1 = num1.charAt(i);
            const n2 = num2.charAt(j);
            let mul = +n1 * +n2;
            let pos = lengthOfNum1 + lengthOfNum2 - i - j - 2;
            do {
                if (typeof ret[pos] === 'undefined') {
                    ret[pos] = 0;
                }
                let num = mul % 10;
                mul = Math.floor(mul / 10);
                ret[pos] += num;

                // 进位处理
                while (ret[pos] >= 10) {
                    ret[pos] -= 10;
                    ret[pos+1] = typeof ret[pos+1] === 'undefined'
                        ? 1
                        : ret[pos+1] + 1;
                }
                pos++;
            } while (mul !== 0);
        }
    }

    return ret.reverse().join('');
};