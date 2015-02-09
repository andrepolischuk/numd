var numd = require('../');
var assert = require('chai').assert;

describe('numd', function() {

  describe('set values', function() {

    it('should return undefined', function() {
      assert.isUndefined(numd('rur', 'рубль', 'рубля', 'рублей'));
      assert.isUndefined(numd({ 'usd': ['доллар', 'доллара', 'долларов'] }));
    });

  });

  describe('get value', function() {

    it('should return undefined', function() {
      assert.isUndefined(numd());
      assert.isUndefined(numd(0));
      assert.isUndefined(numd(null, 'rur'));
      assert.isUndefined(numd.usd());
      assert.isUndefined(numd.gbp('abc'));
      assert.isUndefined(numd(22, 'марка'));
    });

    it('should return string', function() {
      assert.isString(numd(1, 'rur'));
      assert.isString(numd.usd(4));
      assert.isString(numd(7, 'франк', 'франка', 'франков'));
      assert.isString(numd(150.2, 'метр', 'метра', 'метров'));
      assert.isString(numd(-4, 'градус', 'градуса', 'градусов'));
    });

    it('should return `1 рубль`', function() {
      assert.equal('1 рубль', numd(1, 'rur'));
    });

    it('should return `4 доллара`', function() {
      assert.equal('4 доллара', numd.usd(4));
    });

    it('should return `7 франков`', function() {
      assert.equal('7 франков', numd(7, 'франк', 'франка', 'франков'));
    });

    it('should return `150.2 метра`', function() {
      assert.equal('150.2 метра', numd(150.2, 'метр', 'метра', 'метров'));
    });

    it('should return `-4 градуса`', function() {
      assert.equal('-4 градуса', numd(-4, 'градус', 'градуса', 'градусов'));
    });

  });

});
