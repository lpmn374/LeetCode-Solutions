/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const keyMap = {"type": 0, "color": 1, "name": 2}
    let index=keyMap[ruleKey], count=0, n=items.length;
    for(let i=0;i<n;i++)
        if(items[i][index]===ruleValue) count++;
    return count;
};