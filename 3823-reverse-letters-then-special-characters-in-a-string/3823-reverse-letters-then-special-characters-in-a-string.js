/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    let n=s.length, pL=n-1, pS=n-1, result="";
    for(let i=0;i<n;i++)
        if(s[i]>='a' && s[i]<='z'){
            while(!(s[pL]>='a' && s[pL]<='z')) pL--;
            result+=s[pL--];
        }
        else{
            while(s[pS]>='a' && s[pS]<='z') pS--;
            result+=s[pS--];
        }
    return result;
};