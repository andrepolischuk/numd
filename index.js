
'use strict';

/**
 * Expose decline
 * @param  {Number|String} num
 * @param  {String} nominative
 * @param  {String} genitiveSingular
 * @param  {String} genitivePlural
 * @return {String|Function}
 * @api public
 */

module.exports = function(num) {
  switch (typeof num) {
    case 'number':
      var fn = decline([].slice.call(arguments, 1));
      return fn ? fn(num) : fn;
    case 'string':
      return decline(arguments);
  }
};

/**
 * Decline value
 * @param  {String} words
 * @return {Function}
 * @api private
 */

function decline(words) {

  if (words.length !== 3) {
    return;
  }

  return function(num) {

    if (isNaN(num)) {
      return;
    }

    var res = num + ' ';
    num = Math.abs(num);

    switch (true) {
      case isGenitivePlural(num):
        return res + words[2];
      case isGenitiveSingular(num):
        return res + words[1];
      default:
        return res + words[0];
    }

  };

}

/**
 * Genetive plural test
 * @param  {Number}  num
 * @return {Boolean}
 * @api private
 */

function isGenitivePlural(num) {
  var nn = num % 10;
  return (num > 10 && ((num % 100) - ((num % 100) % 10)) / 10 === 1) ||
    nn === 0 || nn >= 5;
}

/**
 * Genetive singular test
 * @param  {Number}  num
 * @return {Boolean}
 * @api private
 */

function isGenitiveSingular(num) {
  return Math.floor(num) !== num || num % 10 >= 2;
}
