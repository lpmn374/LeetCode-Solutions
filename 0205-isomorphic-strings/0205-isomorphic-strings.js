/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const myMap=new Map();
    let seen = new Array(128).fill(0);
    for(let i=0;i<s.length;i++){
        if (!myMap.has(s[i])){
            myMap.set(s[i],t[i]);
            seen[t[i].charCodeAt(0)]++;
        }
        else if (myMap.get(s[i])!==t[i])
            return false;
        if(seen[t[i].charCodeAt(0)]>1) return false;
    }
    return true;
};