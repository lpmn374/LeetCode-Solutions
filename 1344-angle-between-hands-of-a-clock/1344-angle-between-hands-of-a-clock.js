/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    return Math.min(Math.abs((hour%12 + minutes/60)*5 - minutes)*6, 360-Math.abs((hour%12 + minutes/60)*5 - minutes)*6);
};