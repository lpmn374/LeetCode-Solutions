/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let lowLen=low.toString().length, highLen=high.toString().length, firstNum=low, list=[];
    while(firstNum>9) firstNum=Math.floor(firstNum/10);
    let start=firstNum;
    while(lowLen<=highLen){
        if (start+lowLen-1<10){ 
            list.push({startNum: start, length: lowLen});
            start++;
        }
        else{
            lowLen++;
            start=1;
        }
    }
    let result=[];
    for(let {startNum, length} of list){
        let count=0, current=0, flag=false;
        while(count!==length){
            current=current*10+startNum;
            if (current>high){
                flag=true;
                break;
            }
            startNum++;
            count++;
        }
        if (flag===true) continue;
        if (current>=low) result.push(current);
    }
    return result;
};
