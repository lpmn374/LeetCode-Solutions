/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let leftBalls = 0, rightBalls = 0, self = 0, result = [0];
    for (let i=1;i<boxes.length;i++)
        if (boxes[i]==='1'){
            result[0] += i;
            rightBalls++;
        } 
    for (let i=1;i<boxes.length;i++){
        self = 0;
        if (boxes[i-1]==='1') leftBalls++;
        if (boxes[i]==='1'){
            rightBalls--;
            self = 1;
        }
        result.push(result[i-1]-self-rightBalls+leftBalls);
    }
    return result;
};
