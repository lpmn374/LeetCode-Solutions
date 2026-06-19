/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x<Math.pow(-2,31) || x>Math.pow(2,31)-1) return 0;
    let negative=false, reverse=0;
    if (x<0){
        negative=true;
        x*=-1;
    }
    while(x>0){
        reverse=reverse*10 + x%10;
        x=Math.floor(x/10);
    }
    if (reverse<Math.pow(-2,31) || reverse>Math.pow(2,31)-1) return 0;
    return negative?reverse*-1:reverse;
};