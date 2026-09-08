/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let result=[];
    for(let i=0;i<s.length;i++)
        if(s[i]>='a'&& s[i]<='z') result.push(s[i]);
        else result.pop();
    return result.join('');
};