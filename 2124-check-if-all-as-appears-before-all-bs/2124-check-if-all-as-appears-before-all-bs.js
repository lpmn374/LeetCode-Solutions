/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let isBAppears=false;
    for(let i=0;i<s.length;i++)
        if(s[i]==='b') isBAppears=true;
        else if(isBAppears) return false;
    return true;
};