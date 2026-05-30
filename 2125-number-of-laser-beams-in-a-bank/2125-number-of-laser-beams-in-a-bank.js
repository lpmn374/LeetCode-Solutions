/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let sum=0, above=0, below=0;
    for(let i=0;i<bank.length;i++){
        let count=0;
        for(let j=0;j<bank[0].length;j++)
            if(bank[i][j]==='1') count++;
        if(count!==0){
            below=count;
            sum+=above*below;
            above=count;
        }
    }
    return sum;
};