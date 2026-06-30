/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let type = new Map(), color = new Map(), name=new Map();
    for(let i=0;i<items.length;i++){
        type.set(items[i][0], (type.get(items[i][0]) || 0) +1 );
        color.set(items[i][1], (color.get(items[i][1]) || 0) +1);
        name.set(items[i][2], (name.get(items[i][2]) || 0) +1);
    }
    if (ruleKey==='type') return type.get(ruleValue)||0;
    else if (ruleKey==='color') return color.get(ruleValue)||0;
    else return name.get(ruleValue)||0;
};