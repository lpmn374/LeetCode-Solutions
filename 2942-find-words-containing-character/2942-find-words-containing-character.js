/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    return words.reduce((res, word, i) => word.includes(x) ? (res.push(i),res) : res,[]);
};
