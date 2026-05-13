/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let result = [];
    const myMap = new Map ();
    for (let i=0;i<friends.length;i++)
        myMap.set(friends[i]);
    for(let i=0; i<order.length; i++)
        if(myMap.has(order[i])) result.push(order[i]);
    return result;
};