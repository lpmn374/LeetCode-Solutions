/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    let n=arr.length, myMap=new Map(), max=-Infinity;
    for(let i=0;i<n;i++)
        myMap.set(arr[i], (myMap.get(arr[i])||0)+1);
    let num=1, end=1,debt=0;
    while (n>0){
        if (myMap.has(num)){
            if(myMap.get(num)>debt){
                n-=myMap.get(num)-debt;
                debt=0;
            }
            else{
                debt-=myMap.get(num)-1;
                n-=1;
            }
        }
        else{
            n-=1;
            debt++;
        }
        end=num;
        num++;
    }
    return end;
};