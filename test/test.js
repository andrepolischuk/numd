var numd = require('../');
var should = require('should');

describe('numd', function() {

  describe('set value', function() {

    it('should return undefined', function() {
      (numd('rur', 'рубль', 'рубля', 'рублей') === undefined).should.be.true;
      (numd({ 'usd': ['доллар', 'доллара', 'долларов'] }) === undefined).should.be.true;
    });

  });

  describe('get value', function() {

    it('should return undefined', function() {
      (numd() === undefined).should.be.true;
      (numd(0) === undefined).should.be.true;
      (numd(null, 'rur') === undefined).should.be.true;
      (numd.usd() === undefined).should.be.true;
      (numd.gbp('abc') === undefined).should.be.true;
      (numd(22, 'марка') === undefined).should.be.true;
    });

    it('should return string', function() {
      numd(1, 'rur').should.be.a.String;
      numd.usd(4).should.be.a.String;
      numd(7, 'франк', 'франка', 'франков').should.be.a.String;
      numd(150.2, 'метр', 'метра', 'метров').should.be.a.String;
      numd(-4, 'градус', 'градуса', 'градусов').should.be.a.String;
    });

    it('should return `1 рубль`', function() {
      numd(1, 'rur').should.equal('1 рубль');
    });

    it('should return `4 доллара`', function() {
      numd.usd(4).should.equal('4 доллара');
    });

    it('should return `7 франков`', function() {
      numd(7, 'франк', 'франка', 'франков').should.equal('7 франков');
    });

    it('should return `150.2 метра`', function() {
      numd(150.2, 'метр', 'метра', 'метров').should.equal('150.2 метра');
    });

    it('should return `-4 градуса`', function() {
      numd(-4, 'градус', 'градуса', 'градусов').should.equal('-4 градуса');
    });

  });

});
