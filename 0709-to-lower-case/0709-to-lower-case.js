/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    s=s.split('');
    let range= 'A'.charCodeAt(0) - 'a'.charCodeAt(0);
    for(let i=0;i<s.length;i++)
        if(s[i]>='A' && s[i]<='Z') s[i]= String.fromCharCode(s[i].charCodeAt(0)-range);
    return s.join('');
};