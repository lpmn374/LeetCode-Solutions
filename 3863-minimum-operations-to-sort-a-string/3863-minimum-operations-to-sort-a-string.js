/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let minIndex, minValue=Infinity, n=s.length, isSorted=true, rightSorted=true;
    for(let i=0;i<n;i++){
        let char=s.charCodeAt(i);
        if (char<minValue){
            minValue=char;
            minIndex=i;
        }
        if(i>0 && isSorted && char<s.charCodeAt(i-1)) isSorted=false;
    }
    if(n<2 || isSorted) return 0;
    if(n===2 && minIndex===1) return -1;
    if(minIndex===0) return 1;
    if(minIndex>0 && minIndex<n-1){
        let maxValue=-Infinity;
        for(let i=0;i<minIndex;i++)
            if(s.charCodeAt(i)>maxValue) maxValue=s.charCodeAt(i);
        if(s.charCodeAt(minIndex+1)<maxValue) rightSorted=false;
        if (rightSorted)
            for(let i=minIndex+1;i<n-1;i++)
                if(s.charCodeAt(i)>s.charCodeAt(i+1)){
                    rightSorted=false;
                    break;
                }
        if(rightSorted) return 1;
        for(let i=minIndex+1;i<n-1;i++)
            if(s.charCodeAt(i)>maxValue) maxValue=s.charCodeAt(i);
        if(maxValue<=s.charCodeAt(n-1)) return 1;
        return 2;
    }
    if(minIndex===n-1){
        let canQSorted=false;
        for(let i=1;i<n-1;i++)
            if(s.charCodeAt(i)>=s.charCodeAt(0)){
                canQSorted=true;
                break;
            }
        if(canQSorted) return 2;
        return 3;
    }
    return 2;
};
