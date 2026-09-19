/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    let closestX = Math.max(x1, Math.min(xCenter, x2)), closestY = Math.max(y1, Math.min(yCenter, y2)), distX = xCenter - closestX, distY = yCenter - closestY;
    return (distX * distX + distY * distY) <= (radius * radius);
};