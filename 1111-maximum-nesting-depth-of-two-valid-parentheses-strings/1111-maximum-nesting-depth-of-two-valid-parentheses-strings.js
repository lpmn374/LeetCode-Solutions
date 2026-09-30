/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let arr=[];
    for(let i=0;i<seq.length;i++) arr.push((i^seq.charCodeAt(i))&1);
    return arr;
};