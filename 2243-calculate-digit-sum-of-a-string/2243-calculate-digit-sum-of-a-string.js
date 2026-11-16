/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    function update(origin){
        let sum=0, result="";
        for(let i=0;i<origin.length;i++){
            sum+=Number(origin[i]);
            if((i>0 && (i+1)%k===0) || i===origin.length-1){
                result+=sum;
                sum=0;
            }
        }
        return result;
    }
    while(s.length>k) s=update(s);
    return s;
};