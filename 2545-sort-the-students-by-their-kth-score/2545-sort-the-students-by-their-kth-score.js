/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    let arr=[], result=[];
    for(let i=0;i<score.length;i++)
        arr.push({key: score[i][k], val: score[i]});
    arr.sort((a,b)=>b.key-a.key);
    for(let i=0;i<arr.length;i++)
        result.push(arr[i].val);
    return result;
};
