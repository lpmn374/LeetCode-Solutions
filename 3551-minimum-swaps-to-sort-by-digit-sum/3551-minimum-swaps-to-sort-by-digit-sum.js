/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let index=[], myMap=new Map(), n=nums.length;
    for(let i=0;i<n;i++){
        let sum=0, tmp=nums[i];
        while(tmp>0){
            sum+=tmp%10;
            tmp=Math.floor(tmp/10);
        }
        if(!myMap.has(sum)){
            index.push(sum);
            myMap.set(sum,[]);
        }
        myMap.get(sum).push(nums[i]);
    }
    index.sort((a,b)=>a-b);
    let result=[];
    for(let i=0;i<index.length;i++){
        if (myMap.get(index[i]).length>1) myMap.get(index[i]).sort((a,b)=>a-b);
        for(let x of myMap.get(index[i])) result.push(x);
    }
    let valIndices=new Map();
    for (let i=0; i<n; i++) {
        if (!valIndices.has(nums[i])) valIndices.set(nums[i], []);
        valIndices.get(nums[i]).push(i);
    }
    let targetIndices=new Array(n);
    for (let i=0; i<n; i++) {
        let val=result[i], origIdx=valIndices.get(val).shift(); 
        targetIndices[i]=origIdx;
    }
    let visited = new Array(n).fill(false), cycles = 0;
    for (let i=0; i<n; i++){
        if (!visited[i]){
            let curr=i;
            while (!visited[curr]){
                visited[curr]=true;
                curr=targetIndices[curr];
            }
            cycles++;
        }
    }
    return n - cycles;
};