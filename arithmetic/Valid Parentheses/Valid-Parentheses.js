/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for (let ch of s) {
        switch (ch) {
            case '(': 
            case '{':
            case '[': stack.push(ch)
            break
            case ')': if (stack.pop() !== '(') return false
            break
            case '}': if (stack.pop() !== '{') return false
            break
            case ']': if (stack.pop() !== '[') return false
            break
            default: throw new Error('bad input')
        }
    }
    if (stack.pop()) return false
    return true
};