/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let sumE=0, sumO=0, n=num.length;
    for(let i=0;i<n;i++)
        if(i%2===0) sumE+=Number(num[i]);
        else sumO+=Number(num[i]);
    return sumE===sumO;
};