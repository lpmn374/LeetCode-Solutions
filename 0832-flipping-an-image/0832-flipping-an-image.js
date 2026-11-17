/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let n=image.length;
    for(let i=0;i<n;i++){
        let left=0, right=n-1;
        while(left<right){
            image[i][left]^=image[i][right];
            image[i][right]^=image[i][left];
            image[i][left]^=image[i][right];
            image[i][right--]^=1;
            image[i][left++]^=1;
        }
        if(left===right) image[i][left]^=1;
    }
    return image;
};