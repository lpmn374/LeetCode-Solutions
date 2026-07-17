/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let myMap=new Map(), start=0;
    for(let i=0;i<s.length;i++)
        if (s[i]>='1' && s[i]<='9'){
            myMap.set(Number(s[i]), [start, i]); 
            start=i+2;
        }
    let digit=1, newS="";
    while(myMap.has(digit)){
        newS+=s.slice(myMap.get(digit)[0], myMap.get(digit)[1]);
        digit++;
        if(myMap.has(digit)) newS+=" ";
    }
    return newS;
};