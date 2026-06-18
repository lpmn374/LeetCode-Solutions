/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let angle=Math.abs((hour%12 + minutes/60)*5 - minutes)*6;
    return Math.min(angle, 360-angle);
};