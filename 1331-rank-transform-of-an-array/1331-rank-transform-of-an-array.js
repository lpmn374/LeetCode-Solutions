/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let map=new Map(), tmp=[...arr], rank=1;
    tmp.sort((a,b)=>a-b);
    for(let i=0;i<tmp.length;i++){
        map.set(tmp[i],rank);
        if(tmp[i]<tmp[i+1]) rank++;
    }
    for(let i=0;i<arr.length;i++)
        arr[i]=map.get(arr[i]);
    return arr;
};