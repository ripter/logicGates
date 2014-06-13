/*global require, describe, it */
var should = require('should');

var nand = require('../src/nand');

describe('truth table', function() {
  it('0, 0', function() {
    var result = nand(0, 0);

    result.should.equal(1);
  });
  it('0, 1', function() {
    var result = nand(0, 1);

    result.should.equal(1);
  });
  it('1, 0', function() {
    var result = nand(1, 0);

    result.should.equal(1);
  });
  it('1, 1', function() {
    var result = nand(1, 1);

    result.should.equal(0);
  });
});