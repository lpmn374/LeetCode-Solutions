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
    let grt=sumEven, sml=sumOdd;
    if(grt%sml===0) return sml;
    else {
        let l=1;
        while(l!==0){
            l=grt%sml;
            grt=sml
            sml=l;
        }
        return grt;
    }
};