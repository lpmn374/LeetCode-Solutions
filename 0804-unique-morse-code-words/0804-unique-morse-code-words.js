/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let t={
        a:".-",
        b:"-...",
        c:"-.-.",
        d:"-..",
        e:".",
        f:"..-.",
        g:"--.",
        h:"....",
        i:"..",
        j:".---",
        k:"-.-",
        l:".-..",
        m:"--",
        n:"-.",
        o:"---",
        p:".--.",
        q:"--.-",
        r:".-.",
        s:"...",
        t:"-",
        u:"..-",
        v:"...-",
        w:".--",
        x:"-..-",
        y:"-.--",
        z:"--.."
    }
    const mySet=new Set();
    for(let i=0;i<words.length;i++){
        let current="";
        for(let j=0;j<words[i].length;j++)
            current+=t[words[i][j]];
        mySet.add(current);
    }
    return mySet.size;
};