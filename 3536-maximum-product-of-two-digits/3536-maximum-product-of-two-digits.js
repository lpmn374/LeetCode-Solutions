/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let a=0, b=0;
    while(n>0){
        tmp=n%10;
        if (tmp>a){
            if (a>b) b=a;
            a=tmp;
        }
        else if (tmp>b) b=tmp;
        n=Math.floor(n/10);
    }
    return a*b;
};