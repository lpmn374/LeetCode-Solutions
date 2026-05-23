/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result= new Map();
    for(let i=0;i<strs.length;i++){
        k=strs[i].split('').sort().join('');
        if (!result.has(k)) result.set(k,[]);
        result.get(k).push(strs[i]);
    }
    return Array.from(result.values());
};