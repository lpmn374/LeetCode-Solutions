/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let result=[], current=1, i=0, isAdd=false;
    while(result.length<=pattern.length)
        if (pattern[i]==='I' && !isAdd){
            result.push(current);
            current++;
            i++;
        }
        else if (pattern[i]==='I' && isAdd){
            isAdd=false;
            i++
        }
        else{
            rotate=current;
            while(pattern[i]==='D'){
                rotate++;
                i++;
            }
            newCurrent=rotate+1;
            while(rotate>=current){
                result.push(rotate);
                rotate--;
            }
            current=newCurrent;
            isAdd=true;
        }
    return result.join('');  
};