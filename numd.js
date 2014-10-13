// Numd © 2013-2014 Andrey Polischuk
// https://github.com/andrepolischuk/numd

!function(undefined) {

  'use strict';

  var Numd = function() {

    /**
     * Store for values
     */

    var store  = {};

    /**
     * Get value
     * @param  {Number} num
     * @param  {String} word
     * @return {String}
     * @api public
     */
    
    this.get = function(num, word) {

      num = parseInt(num);

      if (num && store[word] !== undefined && store[word].length == 3) {

        var value = decline(num, store[word]);
        return num + ' ' + value;

      } else {

        return;

      }

    };

    /**
     * Set values
     * @param {String|Object} word
     * @param {Array} value
     * @api public
     */
    
    this.set = function(word, value) {

      if (word === undefined) {

        // word not defined

      } else if (value === undefined) {

        // words array
        for (item in word) {
          store[item] = word[item];
        }

      } else {

        // one word
        store[word] = value;
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

      if (num > 10 && ((num % 100) - ((num % 100) % 10)) / 10 == 1) {

        // genitive plural
        return word[2];

      } else {

        var nn = num % 10;

        switch (nn) {
          // nominative
          case 1: return word[0]
          break
          // genitive singular
          case 2:
          case 3:
          case 4: return word[1]
          break
          // genitive plural
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 0: return word[2]
          break
        }
      }

    };

  };

  /**
   * Module exports
   */

  window.numd = new Numd();

}();