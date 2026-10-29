/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry=0, n=a.length, m=b.length, max=n>m?n-1:m-1, aIndex=n-1, bIndex=m-1, result=[];
    while(max>=0){
        let tmp=0;
        if(aIndex>=0 && bIndex>=0) tmp+=Number(a[aIndex--])+Number(b[bIndex--])+carry;
        else if(aIndex>=0 && bIndex<0) tmp+=Number(a[aIndex--])+carry;
        else tmp+=Number(b[bIndex--])+carry;

        if(tmp===0 || tmp===2) result.push('0');
        else if(tmp===1 || tmp===3) result.push('1');

        if(tmp>1) carry=1;
        else carry=0;
        max--;
    }
    if (carry===1) result.push('1');
    return result.reverse().join('').toString();
};