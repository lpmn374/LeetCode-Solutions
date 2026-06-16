/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let result=[];
    for(let i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='z') result.push(s[i]);
        else if (s[i]==='*' && result.length>0) result.pop();
        else if (s[i]==='#') result=result.concat(result);
        else if (s[i]==='%'){
            let left=0, right=result.length-1;
            while(left<right){
                let tmp=result[left];
                result[left]=result[right];
                result[right]=tmp;
                left++;
                right--;
            }
        }
        console.log(result);
    }
    return result.join('');
};