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

}, {}]}, {}, {"1":""})
);