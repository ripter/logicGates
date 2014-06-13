/*global require, describe, it */
var should = require('should');
var nand = require('../src/nand');

function truthTable(answers, func) {
  it('0, 0', function() {
    var result = func(0, 0);

    result.should.equal(answers[0]);
  });
  it('0, 1', function() {
    var result = func(0, 1);

    result.should.equal(answers[1]);
  });
  it('1, 0', function() {
    var result = func(1, 0);

    result.should.equal(answers[2]);
  });
  it('1, 1', function() {
    var result = func(1, 1);

    result.should.equal(answers[3]);
  });
};

describe('Truth Tables', function() {
  describe('NAND', function() {
    truthTable([1, 1, 1, 0], nand);
  });

  describe('NOT', function() {
    it('1', function() {
      var result = nand.not(1);

			result.should.equal(0);
    });
    it('0', function() {
      var result = nand.not(0);

			result.should.equal(1);
    });
  });

  describe('AND', function() {
    truthTable([0, 0, 0, 1], nand.and);
  });


  describe('OR', function() {
    it('0, 0', function() {
      var result = nand.or(0, 0);

      result.should.equal(0);
    });
    it('0, 1', function() {
      var result = nand.or(0, 1);

      result.should.equal(1);
    });
    it('1, 0', function() {
      var result = nand.or(1, 0);

      result.should.equal(1);
    });
    it('1, 1', function() {
      var result = nand.or(1, 1);

      result.should.equal(1);
    });
  });

  describe('NOR', function() {
    it('0, 0', function() {
      var result = nand.nor(0, 0);

      result.should.equal(1);
    });
    it('0, 1', function() {
      var result = nand.nor(0, 1);

      result.should.equal(0);
    });
    it('1, 0', function() {
      var result = nand.nor(1, 0);

      result.should.equal(0);
    });
    it('1, 1', function() {
      var result = nand.nor(1, 1);

      result.should.equal(0);
    });
  });


  describe('XOR', function() {
    it('0, 0', function() {
      var result = nand.xor(0, 0);

      result.should.equal(0);
    });
    it('0, 1', function() {
      var result = nand.xor(0, 1);

      result.should.equal(1);
    });
    it('1, 0', function() {
      var result = nand.xor(1, 0);

      result.should.equal(1);
    });
    it('1, 1', function() {
      var result = nand.xor(1, 1);

      result.should.equal(0);
    });
  });


  describe('XNOR', function() {
    it('0, 0', function() {
      var result = nand.xnor(0, 0);

      result.should.equal(1);
    });
    it('0, 1', function() {
      var result = nand.xnor(0, 1);

      result.should.equal(0);
    });
    it('1, 0', function() {
      var result = nand.xnor(1, 0);

      result.should.equal(0);
    });
    it('1, 1', function() {
      var result = nand.xnor(1, 1);

      result.should.equal(1);
    });
  });
});