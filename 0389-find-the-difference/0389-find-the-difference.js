/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let result=0;
    for (let x of s) result^=x.charCodeAt(0);
    for (let y of t) result^=y.charCodeAt(0);
    return String.fromCharCode(result);
};