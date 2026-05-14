/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    return words.reduce((result, word, i)=> {
        if (word.includes(x)) result.push(i);
        return result;
    },[]);
};
