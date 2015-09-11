'use strict';

module.exports = function (num, word, singular, plural) {
  return typeof num === 'number' ?
    pluralize(word, singular, plural)(num) :
    pluralize(num, word, singular);
};

function pluralize(word, singular, plural) {
  return function(num) {
    var abs = Math.abs(num);
    var str = num + ' ';
    if (num === 1) return str + word;
    if (!plural) return str + singular;
    if (isGenitivePlural(abs)) return str + plural;
    if (isGenitiveSingular(abs)) return str + singular;
    return str + word;
  };
}

function isGenitivePlural(num) {
  var nn = num % 10;
  return (num > 10 && ((num % 100) - ((num % 100) % 10)) / 10 === 1) ||
    nn === 0 || nn >= 5;
}

function isGenitiveSingular(num) {
  return Math.floor(num) !== num || num % 10 >= 2;
}
