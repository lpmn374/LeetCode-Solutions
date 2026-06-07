/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let result = [], current = 1, i = 0;
    while (result.length <= pattern.length)
        if (pattern[i] === 'I' || i === pattern.length) {
            result.push(current);
            current++;
            i++;
        }
        else {
            startCount = current;
            while (i < pattern.length && pattern[i] === 'D') {
                current++;
                i++;
            }
            for (let j = current; j >= startCount; j--)
                result.push(j);
            current++;
            i++;
        }
    return result.join('');  
};