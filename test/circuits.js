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

describe('Full Adder', function() {
  var table = [
    [nand, 'a,b', 'r1'],
    [nand, 'a,r1', 'r2'],
	  [nand, 'r1,b', 'r3'],
    [nand, 'r2,r3', 'r4'],
    [nand, 'r4,cin', 'r5'],
    [nand, 'r4,r5', 'r6'],
    [nand, 'r5,cin', 'r7'],
    [nand, 'r5,r1', 'cout'],
    [nand, 'r6,r7', 's']
  ];
  var run = engine.runTable.bind(null, table);

  it('0,0,0', function() {
    var state = run({a: 0, b: 0, cin: 0});
    state.s.should.equal(0);
    state.cout.should.equal(0);
  });

  it('1,0,0', function() {
    var state = run({a: 1, b: 0, cin: 0});
    state.s.should.equal(1);
    state.cout.should.equal(0);
  });

  it('0,1,0', function() {
    var state = run({a: 0, b: 1, cin: 0});
    state.s.should.equal(1);
    state.cout.should.equal(0);
  });

  it('1,1,0', function() {
    var state = run({a: 1, b: 1, cin: 0});
    state.s.should.equal(0);
    state.cout.should.equal(1);
  });

  it('0,0,1', function() {
    var state = run({a: 0, b: 0, cin: 1});
    state.s.should.equal(1);
    state.cout.should.equal(0);
  });

  it('1,0,1', function() {
    var state = run({a: 1, b: 0, cin: 1});
    state.s.should.equal(0);
    state.cout.should.equal(1);
  });

  it('0,1,1', function() {
    var state = run({a: 0, b: 1, cin: 1});
    state.s.should.equal(0);
    state.cout.should.equal(1);
  });

  it('1,1,1', function() {
    var state = run({a: 1, b: 1, cin: 1});
    state.s.should.equal(1);
    state.cout.should.equal(1);
  });
});