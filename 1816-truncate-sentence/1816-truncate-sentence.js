/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let result=[], i=0;
    while(k>0 && i<s.length){
        if (s[i]===' ') k--;
        if (!(s[i]===' ' && k===0)) result.push(s[i]);
        i++;
    }
    return result.join('');
};