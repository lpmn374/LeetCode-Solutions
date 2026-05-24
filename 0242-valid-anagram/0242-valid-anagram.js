/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    const myMap=new Map();
    for(let x of s)
        myMap.set(x, (myMap.get(x)||0) +1);
    for(let y of t){
        myMap.set(y, (myMap.get(y)||0)-1);
        if(myMap.get(y)<0) return false;
    }
    return true;
};