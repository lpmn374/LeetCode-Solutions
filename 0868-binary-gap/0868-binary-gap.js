/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let bit=new Array(31).fill(0), start=30;
    while(n>0){
        if(2**start<=n){
            bit[30-start]=1;
            n-=2**start;
        }
        start--;
    }
    let flag=0, current=0, max=-Infinity, a=null, b=null;
    for(let i=0;i<31;i++){
        if(bit[i]===1 && flag===0){
            a=i;
            flag=1;
        }
        else if (bit[i]===1 && flag===1){
            b=i;
            flag=0;
        }
        if (a && b) {
            current=Math.abs(a-b);
            if(max<current) max=current;
        }
    }
    return max!==-Infinity?max:0;
};
