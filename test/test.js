
'use strict';

var numd = require('..');
var assert = require('assert');

describe('numd()', function() {
  it('should return undefined', function() {
    assert(numd() === undefined);
    assert(numd(0) === undefined);
    assert(numd('рубль') === undefined);
    assert(numd(2, 'доллар', 'доллара') === undefined);
    assert(numd(null, 'метр', 'метра', 'метров') === undefined);
  });
});

describe('numd(num, ...words)', function() {
  it('should return string', function() {
    assert(numd(1, 'рубль', 'рубля', 'рублей') === '1 рубль');
    assert(numd(4, 'доллар', 'доллара', 'долларов') === '4 доллара');
    assert(numd(7, 'франк', 'франка', 'франков') === '7 франков');
    assert(numd(150.2, 'метр', 'метра', 'метров') === '150.2 метра');
    assert(numd(-4, 'градус', 'градуса', 'градусов') === '-4 градуса');
  });
});

describe('numd(...words)', function() {
  it('should return function', function() {
    assert(typeof numd('рубль', 'рубля', 'рублей') === 'function');
    assert(typeof numd('доллар', 'доллара', 'долларов') === 'function');
  });

  it('should return string', function() {
    var rur = numd('рубль', 'рубля', 'рублей');
    var deg = numd('градус', 'градуса', 'градусов');
    assert(rur(1) === '1 рубль');
    assert(deg(-4) === '-4 градуса');
  });
});
