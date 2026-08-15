/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let start=0, result="", n=s.length;
    for(let i=0;i<n;i++)
        if (s[i]===' ' || i===n-1){
            let tmp=i;
            if(s[i]===' ') tmp--;
            for(let j=tmp;j>=start;j--)
                result+=s[j];
            if(s[i]===' ') result+=" ";
            start=i+1;
        }
    return result;
};