/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let result=[], map={}, current='a'.charCodeAt(0);
    for(let i=0;i<key.length;i++)
        if(key[i]!==' ' && !map[key[i]]){
            map[key[i]]=current;
            current++;
        }
    for(let i=0;i<message.length;i++)
        if(message[i]!==' ') result.push(String.fromCharCode(map[message[i]]));
        else result.push(' ');
    return result.join('');
};