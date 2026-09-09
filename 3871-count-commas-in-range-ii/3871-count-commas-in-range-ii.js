/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let str="999", tmp=String(n), len=tmp.length, prev=999, total=0;
    for(let i=3;i<len;i+=3){
        str+="999";
        if(n>Number(str)) total+=(Number(str)-prev)*(i/3);
        else total+=(n-prev)*(i/3);
        prev=Number(str);
    }
    return total;
};