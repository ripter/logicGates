/*global require, describe, it */
var should = require('should');
var input = require('../src/input');
var nand = require('../src/nand');

it('switchOn', function() {
  input.switchOn().should.equal(1);
});

it('switchOff', function() {
  input.switchOff().should.equal(0);
});

it('assertOn', function() {
  input.assertOn(1);
});

it('assertOff', function() {
  input.assertOff(0);
});
