/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let a='a'.charCodeAt(0), result=[];
    for(let i=0;i<words.length;i++){
        let sum=0;
        for(let j=0;j<words[i].length;j++)
            sum+=weights[words[i].charCodeAt(j)-a];
        result.push(String.fromCharCode(Math.abs(25-sum%26+a)));
    }
    return result.join('');
};