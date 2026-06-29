/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let paLen=patterns.length, count=0;
    for(let i=0;i<paLen;i++)
        if(word.includes(patterns[i])) count++;
    return count;
};