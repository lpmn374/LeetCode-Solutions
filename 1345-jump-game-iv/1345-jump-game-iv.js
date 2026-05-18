/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const hashMap = new Map();
    for(let i=0;i<arr.length;i++){
        if (!hashMap.has(arr[i])) hashMap.set(arr[i],[]);
        hashMap.get(arr[i]).push(i);
    }
    let queue=[0], steps=0, visited=new Array(arr.length).fill(false);
    visited[0]=true;
    while(queue.length>0){
        let size=queue.length;
        for(let j=0;j<size;j++){
            let i=queue.shift();
            if(i===arr.length-1) return steps;
            if(i+1<arr.length && !visited[i+1]){
                queue.push(i+1);
                visited[i+1] = true;
            }
            if(i-1>=0 && !visited[i-1]){
                queue.push(i-1);
                visited[i-1] = true;
            }
            if(hashMap.has(arr[i])){
                for(let x of hashMap.get(arr[i]))
                    if(!visited[x]){
                        queue.push(x);
                        visited[x] = true;
                    }
                hashMap.delete(arr[i]);
            }
        }
        steps++;
    }
        return steps++;
};