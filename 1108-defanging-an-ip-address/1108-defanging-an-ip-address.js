/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let n=address.length, result="";
    for(let i=0;i<n;i++)
        if(address[i]==='.') result+='[.]';
        else result+=address[i];
    return result;
};