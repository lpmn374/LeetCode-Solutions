/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let mySet=new Set();
    for(let i=0;i<sentence.length;i++)
        mySet.add(sentence[i]);
    return mySet.size===26;
};