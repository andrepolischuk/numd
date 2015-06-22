
'use strict';

/**
 * Expose pluralize
 *
 * @param  {Number|String} num
 * @param  {String} nominative
 * @param  {String} genitiveSingular
 * @param  {String} genitivePlural
 * @return {String|Function}
 * @api public
 */

module.exports = function(num) {
  var fn = typeof num === 'number' ? pluralize([].slice.call(arguments, 1)) : null;
  return fn ? fn(num) : pluralize(arguments);
};

/**
 * Pluralize value
 *
 * @param  {String} words
 * @return {Function}
 * @api private
 */

function pluralize(words) {
  return function(num) {
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
 *
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
