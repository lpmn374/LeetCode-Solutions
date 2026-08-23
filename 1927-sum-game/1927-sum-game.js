/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    let s1=0, s2=0, sumL=0, sumR=0, n=num.length;
    for(let i=0;i<n;i++)
        if(i<n/2)
            if(num[i]!=='?') sumL+=Number(num[i]);
            else s1++;
        else{
            if(num[i]!=='?') sumR+=Number(num[i]);
            else s2++;
        }
    return 2*(sumL-sumR)+9*(s1-s2)!==0;
};