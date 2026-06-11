/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let arr=new Array(26).fill(-1);
    for(let i=0;i<s.length;i++){
        let index=s.charCodeAt(i)-'a'.charCodeAt(0);
        if(arr[index]<i) arr[index]=i;
    }
    let result=[],max=arr[s.charCodeAt(0)-'a'.charCodeAt(0)], i=0, start=-1;
    while(i<s.length){
        let index=s.charCodeAt(i)-'a'.charCodeAt(0);
        if(arr[index]>max) max=arr[index];
        if(i===max){
            result.push(i-start);
            start=max;
        }
        i++;
    }
    return result;
};