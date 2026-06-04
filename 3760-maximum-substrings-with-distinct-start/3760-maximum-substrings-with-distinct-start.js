/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let mySet = new Set();
    for(let i=0;i<s.length;i++)
        mySet.add(s[i]);
    return mySet.size;
};

