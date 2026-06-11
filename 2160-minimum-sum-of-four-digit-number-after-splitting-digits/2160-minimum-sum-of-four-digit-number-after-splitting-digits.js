/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let arr=new Array(10).fill(0), sum=0;
    while(num>0){
        arr[num%10]++;
        num=Math.floor(num/10);
    }
    let place1=1, place2=1, turn=1;
    for(let i=0;i<arr.length;i++){
        while(arr[i]>0){
            if(turn===1){
                sum+=(10**place1)*i;
                place1--;
                turn=2;
            }
            else{
                sum+=(10**place2)*i;
                place2--;
                turn=1;
            }
            arr[i]--;
        }
    }
    return sum;
};