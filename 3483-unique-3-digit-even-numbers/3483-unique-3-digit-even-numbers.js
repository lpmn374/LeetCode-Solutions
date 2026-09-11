/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let n=digits.length, mySet=new Set(), sum=0;
    for(let i=0;i<n;i++){
        if(digits[i]>0){
            sum=digits[i];
            for(let j=0;j<n;j++)
                if(j!==i){
                    sum=sum*10+digits[j];
                    for(let k=0;k<n;k++)
                        if(k!==i && k!==j){
                            sum=sum*10+digits[k];
                            if(sum%2===0) mySet.add(sum); 
                            sum=(sum-digits[k])/10;
                        }
                    sum=(sum-digits[j])/10;
                } 
        }
    }
    return mySet.size;
};