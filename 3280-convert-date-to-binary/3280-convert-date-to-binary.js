/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    date=date.split('-');
    return date.map(part=>Number(part).toString(2)).join('-');
};