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
   * @param  {String} word
   * @return {Function}
   * @api private
   */

  var get = function(word) {

    if (store[word] !== undefined && store[word].length === 3) {

      return function(num) {

        num = parseInt(num);

        if (num) {
          
          var value = decline(num, store[word]);
          return num + ' ' + value;

        }

      };

    }

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
   * @param {Number|String|Object} word
   * @param {String|Object} value
   * @api public
   */
  
  var numd = function(word, value) {

    if (typeof word === 'object') {

      // set words array
      for (var item in word) {
        store[item]   = word[item];
        numd[item] = get(item);
      }

    } else if (typeof value === 'object') {

      // set one word
      store[word]   = value;
      numd[word] = get(word);

    } else if (typeof parseInt(word) === 'number' && typeof value === 'string') {

      // get value
      return get(value)(word);

    }

  };

  /**
   * Module exports
   */

  window.numd = numd;

}();