/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let count=0, j=0, arr=[];
    for(let i=0;i<s.length;i++)
        if(s[i]==='1') count++;
    while(j<s.length-1){
        if(count>1){
            arr.push('1');
            count--;
        }
        else arr.push('0');
        j++; 
    }
    arr.push('1');
    return arr.join('').toString();
};