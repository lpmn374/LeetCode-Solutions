/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let countLetters= new Array(26).fill(0), first='A'.charCodeAt(0);
    for(let i=0;i<tiles.length;i++)
        countLetters[tiles.charCodeAt(i)%first]++;
    let count=0;
    const backtracking = (countLetters) => {
        for(let i=0;i<26;i++)
            if(countLetters[i]>0){
                count++;
                countLetters[i]--;
                backtracking(countLetters);
                countLetters[i]++;
            }
    }
    backtracking(countLetters);
    return count;
};