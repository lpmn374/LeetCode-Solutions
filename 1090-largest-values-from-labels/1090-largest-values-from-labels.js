/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    if (values.length===1) return values[0];
    let sum=0, count=new Map(), list = values.map((v,l)=>[v, labels[l]]);
    list.sort((a,b)=>b[0]-a[0]);
    for(let [value, label] of list){
        count.set(label, count.get(label)+1 || 1);
        if (count.get(label)<=useLimit){
            sum+=value;
            numWanted--;
        }
        if(numWanted===0) break;
    }
    return sum;
};