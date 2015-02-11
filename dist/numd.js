(function umd(require){
  if ('object' == typeof exports) {
    module.exports = require('1');
  } else if ('function' == typeof define && (define.amd || define.cmd)) {
    define(function(){ return require('1'); });
  } else {
    this['numd'] = require('1');
  }
})((function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @param {Boolean} jumped
   * @api public
   */

  function require(name, jumped){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];

    fn.call(m.exports, function(req){
      var dep = modules[id][1][req];
      return require(dep ? dep : req);
    }, m, m.exports, outer, modules, cache, entries);

    // expose as `name`.
    if (name) cache[name] = cache[id];

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {

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

function get(abbr) {

  if (typeof abbr === 'string' && !store[abbr]) {
    return;
  }

  var word = typeof abbr === 'object' ? abbr : store[abbr];

  return function(num) {

    if (isNaN(parseInt(num))) {
      return;
    }

    return [+num, decline(+num, word)].join(' ');

  };

}

/**
 * Decline value
 * @param  {Number} num
 * @param  {String} word
 * @return {String}
 * @api private
 */

function decline(num, word) {

  num = Math.abs(num);

  // fractional
  if (Math.floor(num) !== num) {
    return word[1];
  }

  // integer
  if (num > 10 && ((num % 100) - ((num % 100) % 10)) / 10 === 1) {
    return word[2];
  } else {
    var nn = num % 10;
    return word[(nn === 0 || nn >= 5) ? 2 : (nn >= 2 ? 1 : 0)];
  }

}

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

  } else if (arguments.length === 4) {

    // guick get value
    return get([nominative, genitiveSingular, genitivePlural])(num);

  } else if (nominative && store[nominative]) {

    // get from storage
    return get(nominative)(num);

  }

}

/**
 * Module exports
 */

module.exports = numd;

}, {}]}, {}, {"1":""})
);