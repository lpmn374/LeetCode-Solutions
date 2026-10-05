/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let count=0, sum=0;
    for(let i=0;i<s.length;i++){
        if (s[i]==='(') count++;
        else{
            count--;
            if (i>0 && s[i-1]==='(') sum+=2**(count);
        }
    }
    return sum;
};