/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let myMap=new Map();
    for(let i=0;i<names.length;i++)
        myMap.set(heights[i],names[i]);
    heights.sort((a,b)=>b-a);
    for(let i=0;i<names.length;i++)
        heights[i]=myMap.get(heights[i]);
    return heights;
};