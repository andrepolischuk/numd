
'use strict';

var numd = require('./');
var assert = require('assert');

describe('numd(num, ...words)', function() {
  it('should return string', function() {
    assert(numd(1, 'рубль', 'рубля', 'рублей') === '1 рубль');
    assert(numd(4, 'доллар', 'доллара', 'долларов') === '4 доллара');
    assert(numd(7, 'франк', 'франка', 'франков') === '7 франков');
    assert(numd(150.2, 'метр', 'метра', 'метров') === '150.2 метра');
    assert(numd(-4, 'градус', 'градуса', 'градусов') === '-4 градуса');
    assert(numd(1, 'ruble', 'rubles') === '1 ruble');
    assert(numd(4, 'dollar', 'dollars') === '4 dollars');
    assert(numd(150.2, 'meter', 'meters') === '150.2 meters');
    assert(numd(-4, 'degree', 'degrees') === '-4 degrees');
  });
});

describe('numd(...words)', function() {
  it('should return string', function() {
    var rurRu = numd('рубль', 'рубля', 'рублей');
    assert(rurRu(1) === '1 рубль');
    var degRu = numd('градус', 'градуса', 'градусов');
    assert(degRu(-4) === '-4 градуса');
    var rurEn = numd('ruble', 'rubles');
    assert(rurEn(1) === '1 ruble');
    var degEn = numd('degree', 'degrees');
    assert(degEn(-4) === '-4 degrees');
  });
});
