/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let total=3*(2**(n-1));
    if (k>total) return "";
    let object = {
        'a': {left: 'b', right: 'c'},
        'b': {left: 'a', right: 'c'},
        'c': {left: 'a', right: 'b'},
    }, result="";
    let range=total/3;
    if (k<=range) result+='a';
    else if(k<=2*range) result+='b';        
    else result+='c';
    k= (k-1) % range;
    while(result.length<n){
        range/=2;
        if(k<range) result+= object[result[result.length-1]].left;
        else{
            result+= object[result[result.length-1]].right;
            k-=range;
        }
    }
    return result;
};

