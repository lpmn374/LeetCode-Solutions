/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack=[];
    for(let i=0;i<asteroids.length;i++){
        let disappear=false;
        while(stack.length > 0 && stack[stack.length-1]>0 && asteroids[i]<0){
            if (asteroids[i]+stack[stack.length-1]===0){ 
                stack.pop();                    
                disappear=true;
                break;
            }
            else if(asteroids[i]+stack[stack.length-1]>0){
                disappear=true;
                break;
            }
            else{
                stack.pop();  
                continue;
            }          
        }
        if(!disappear)
            stack.push(asteroids[i]);
    }
    return stack;
};