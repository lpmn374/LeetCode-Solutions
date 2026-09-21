/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let map = new Map(), count=0;
    for(let i=1;i<rings.length;i+=2){
        if (!map.has(rings[i])) map.set(rings[i], new Set());
        map.get(rings[i]).add(rings[i-1]);
    }
    for(let [key, values] of map)
        if (values.size===3) count++;
    return count;
};