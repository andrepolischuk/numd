// Numd © 2013-2014 Andrey Polischuk
// https://github.com/andrepolischuk/numd

!function(undefined) {

  'use strict';

  /**
   * Store for values
   */

  var store  = {};

  /**
   * Get value
   * @param  {String} abbr
   * @return {Function}
   * @api private
   */

  var get = function(abbr) {

    if (typeof abbr === 'string' && !store[abbr]) {
      return;
    }

    var word = typeof abbr === 'object' ? abbr : store[abbr];

    return function(num) {

      num = +num;

      if (!num) {
        return;
      }

      return [num, decline(num, word)].join(' ');

    };

  };

  /**
   * Decline value
   * @param  {Number} num
   * @param  {String} word
   * @return {String}
   * @api private
   */

  var decline = function(num, word) {

    if (num > 10 && ((num % 100) - ((num % 100) % 10)) / 10 === 1) {

      // genitive plural
      return word[2];

    } else {

      var nn = num % 10;

      switch (nn) {
        // nominative
        case 1:
          return word[0];
        // genitive singular
        case 2:
        case 3:
        case 4:
          return word[1];
        // genitive plural
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
          return word[2];
      }

    }

  };

  /**
   * Numd
   * @param {Number|String|Object} num
   * @param {String} nominative
   * @param {String} genitiveSingular
   * @param {String} genitivePlural
   * @api public
   */

  function numd(num, nominative, genitiveSingular, genitivePlural) {

    if (typeof num === 'object') {

      // set words array
      for (var item in num) {
        if (num[item].length === 3) {
          store[item] = num[item];
          numd[item]  = get(item);
        }
      }

    } else if (typeof num === 'string' && !!genitivePlural) {

      // set one word
      store[num] = [nominative, genitiveSingular, genitivePlural];
      numd[num]  = get(num);

    } else if (typeof +num === 'number' && !!genitivePlural) {

      // guick get value
      return get([nominative, genitiveSingular, genitivePlural])(num);

    } else if (typeof +num === 'number' && !genitiveSingular) {

      // get value from storage
      return get(nominative)(num);

    }

  }

  /**
   * Module exports
   */

  if (typeof define === 'function' && define.amd) {

    define([], function() {
      return numd;
    });

  } else if (typeof module !== 'undefined' && module.exports) {

    module.exports = numd;

  } else {

    this.numd = numd;

  }

}.call(this);
