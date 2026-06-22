/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let arr=new Array(26).fill(0), firstChar='a'.charCodeAt(0);
    for(let i=0;i<text.length;i++)
        arr[text.charCodeAt(i)-firstChar]++;
    return Math.min(arr['a'.charCodeAt(0)-firstChar],arr['b'.charCodeAt(0)-firstChar], Math.floor(arr['l'.charCodeAt(0)-firstChar]/2), Math.floor(arr['o'.charCodeAt(0)-firstChar]/2), arr['n'.charCodeAt(0)-firstChar]);
};