/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result=0, table={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for(let i=s.length-1;i>=0;i--)
        if(i===s.length-1 || table[s[i]]>=table[s[i+1]]) result+=table[s[i]];
        else result-=table[s[i]];
    return result;    
};