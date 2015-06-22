
'use strict';

/**
 * Expose pluralize
 *
 * @param  {Number|String} num
 * @param  {String} word
 * @param  {String} singular
 * @param  {String} plural
 * @return {String|Function}
 * @api public
 */

module.exports = function(num, word, singular, plural) {
  return typeof num === 'number' ?
    pluralize(word, singular, plural)(num) :
    pluralize(num, word, singular);
};

/**
 * Pluralize value
 *
 * @param  {String} word
 * @param  {String} singular
 * @param  {String} plural
 * @return {Function}
 * @api private
 */

function pluralize(word, singular, plural) {
  return function(num) {
    var abs = Math.abs(num);
    var str = num + ' ';

    if (isGenitivePlural(abs)) return str + plural;
    if (isGenitiveSingular(abs)) return str + singular;
    return str + word;
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
 *
 * @param  {Number}  num
 * @return {Boolean}
 * @api private
 */

function isGenitiveSingular(num) {
  return Math.floor(num) !== num || num % 10 >= 2;
}
