/*global require, describe, it */
var should = require('should');
var input = require('../src/input');
var nand = require('../src/nand');
var engine = require('../src/engine');


describe('AND', function() {
  var table = [
    [nand.and, 'a,b', 'c']
  ];
  var run = engine.runTable.bind(null, table);

  it('1,1', function() {
    var state = run({a: 1, b: 1});
    state.c.should.equal(1);
  });

  it('0,1', function() {
    var state = run({a: 0, b: 1});
    state.c.should.equal(0);
  });

  it('1,0', function() {
    var state = run({a: 1, b: 0});
    state.c.should.equal(0);
  });

  it('0,0', function() {
    var state = run({a: 0, b: 0});
    state.c.should.equal(0);
  });
});

describe('RS NAND', function() {
  var table = [
    [nand, 's,j', 'q']
    , [nand, 'r,q', 'j']
  ];
  var run = engine.runTable.bind(null, table);

  it('0,1', function() {
    var state = run({s: 0, r: 1});
    state.q.should.equal(1);
  });

  it('1,0', function() {
    var state = run({s: 1, r: 0});
    state.q.should.equal(0);
  });
});