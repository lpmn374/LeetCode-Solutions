/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxCount=0;
    for(let i=0;i<sentences.length;i++){
        let count=0;
        for(let j=0;j<sentences[i].length;j++)
            if (sentences[i][j]===' ') count++;
        if (count>maxCount) maxCount=count;
    }
    return maxCount+1;
};