/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words=text.split(" "), mySet= new Set(brokenLetters), count=0;
    for(let word of words){
        let canType=true;
        for(let char of word)
            if(mySet.has(char)) {
                canType=false; 
                break; 
            }
        if (canType) count++;
    }
    return count;
};