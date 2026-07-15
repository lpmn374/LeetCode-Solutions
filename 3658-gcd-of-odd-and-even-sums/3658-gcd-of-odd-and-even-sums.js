/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let k=0, sumOdd=0, sumEven=0;
    for(let i=0;i<n;i++){
        k+=1;
        sumOdd+=k;
        k+=1;
        sumEven+=k;
    }
    let num=sumOdd;
    while(num>0){
        if(sumEven%num===0 && sumOdd%num===0) return num;
        num--;
    }
    return 1;
};