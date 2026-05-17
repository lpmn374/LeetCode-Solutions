/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    return String.fromCharCode([...s].reduce((acc,cur)=>acc^cur.charCodeAt(0),0)^[...t].reduce((acc,cur)=>acc^cur.charCodeAt(0),0));
};