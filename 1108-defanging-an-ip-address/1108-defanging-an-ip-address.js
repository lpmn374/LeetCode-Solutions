/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let n=address.length, result="";
    for(let i=0;i<n;i++){
        let char=address[i];
        if(char==='.') result+='[.]';
        else result+=char;
    }
    return result;
};