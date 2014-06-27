/*global require, describe, it */
var should = require('should');
var nand = require('../src/nand');
var engine = require('../src/engine');

describe('RS NAND latch', function() {
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


describe('Half Adder', function() {
  var table = [
    [nand, 'a,b', 'r1'],
		[nand, 'a,r1', 'r2'],
    [nand, 'r1,b', 'r3'],
		[nand, 'r2,r3', 's'],
	  [nand, 'r1,r1', 'c']
  ];
  var run = engine.runTable.bind(null, table);

  it('0,0', function() {
    var state = run({a: 0, b: 0});
    state.s.should.equal(0);
    state.c.should.equal(0);
  });

  it('1,0', function() {
    var state = run({a: 1, b: 0});
    state.s.should.equal(1);
    state.c.should.equal(0);
  });

  it('0,1', function() {
    var state = run({a: 0, b: 1});
    state.s.should.equal(1);
    state.c.should.equal(0);
  });

  it('1,1', function() {
    var state = run({a: 1, b: 1});
    state.s.should.equal(0);
    state.c.should.equal(1);
  });

});