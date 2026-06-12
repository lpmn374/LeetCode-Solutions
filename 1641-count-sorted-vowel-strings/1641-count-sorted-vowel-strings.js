/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    // 5+4+3+2+1 = 15
    // (5+4+3+2+1)+(4+3+2+1)+(3+2+1)+(2+1)+1 = 15 + (15-5) + (15-5-4) + (15-5-4-3) + (15-5-4-3-2)
    // = 15+10+6+3+1=35
    // = 35 + (35-15) + (35-15-10) + (35-15-10-6) + (35-15-10-6-3) = 35 + 20 + 10 + 4 +1 = 70
    if (n===1) return 5;
    if (n===2) return 15;
    let arr=[5,4,3,2,1];
    n-=1;
    while(n>0){
        for(let i=arr.length-2;i>=0;i--)
            arr[i]+=arr[i+1];
        n--;
    }
    return arr[0];
};