/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let result="";
    for(let i=0;i<s.length;i++)
        if (s[i]>='a' && s[i]<='z') result+=s[i];
        else result+=String.fromCharCode(s.charCodeAt(i-1)+Number(s[i]));
    return result;
};