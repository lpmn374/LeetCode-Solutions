/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let rows=image.length, cols=image[0].length, oldColor=image[sr][sc];
    if(oldColor===color) return image;
    function coloring(r, c){
        if (r<0 || r>=rows || c<0 || c>=cols || image[r][c]!==oldColor) return;
        image[r][c]=color;
        coloring(r+1, c);
        coloring(r-1, c);
        coloring(r, c+1);
        coloring(r, c-1);
    }
    coloring(sr, sc);
    return image;
};