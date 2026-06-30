/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let n=s.length, myMap=new Map();
    for(let i=0;i<n;i++){
        if (!myMap.has(s[i])) myMap.set(s[i],[]);
        myMap.get(s[i]).push(i);
    }
    if (!myMap.has('a')||!myMap.has('b')||!myMap.has('c')) return 0;
    let indexA=0, indexB=0, indexC=0, lastIndex, firstIndex, count=0;
    while (indexA < myMap.get('a').length && indexB < myMap.get('b').length && indexC < myMap.get('c').length){
        let a=myMap.get('a')[indexA], b=myMap.get('b')[indexB], c=myMap.get('c')[indexC], min=Math.min(a,b,c), max=Math.max(a,b,c);
        if (firstIndex===min && lastIndex===max) break;
        else{
            firstIndex=min;
            lastIndex=max;
        }
        count+= 1+(n-1-lastIndex);
        if (s[min]==='a') indexA++;
        else if (s[min]==='b') indexB++;
        else indexC++;
    }
    return count;
};