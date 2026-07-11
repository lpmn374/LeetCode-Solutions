/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let i=word.indexOf(ch), result="";
    if(i===-1) return word;
    result=word.slice(0,i+1).split('').reverse().join('')+word.slice(i+1);
    return result;
};