/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let myMap=new Map();
    for(let i=0;i<word.length;i++)
        myMap.set(word[i], (myMap.get(word[i])||0)+1);
    if(myMap.size<9) return word.length;
    let arr=Array.from(myMap.entries());
    arr.sort((a,b)=>b[1]-a[1]); //0-7,8-15,16-23
    let click=1, sum=0, count=0;
    for(let [key,val] of arr){
        sum+=val*click;
        count++;
        if(count%8===0) click++;
    }
    return sum;
};