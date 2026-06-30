/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let index, search=new Map();
    if (ruleKey==='type') index=0;
    else if (ruleKey==='color') index=1;
    else index=2;
    for(let i=0;i<items.length;i++)
        search.set(items[i][index], (search.get(items[i][index]) || 0) +1 );
    return search.get(ruleValue)||0;
};