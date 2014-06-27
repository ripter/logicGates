/*global require, describe, it */
var should = require('should');
var nand = require('../src/nand');
var engine = require('../src/engine');


describe('NAND', function() {
  var table = [
    [nand, 'a,b', 'q']
  ];
  var run = engine.runTable.bind(null, table);

  it('1,1', function() {
    var state = run({a: 1, b: 1});
    state.q.should.equal(0);
  });

  it('0,1', function() {
    var state = run({a: 0, b: 1});
    state.q.should.equal(1);
  });

  it('1,0', function() {
    var state = run({a: 1, b: 0});
    state.q.should.equal(1);
  });

  it('0,0', function() {
    var state = run({a: 0, b: 0});
    state.q.should.equal(1);
  });
});

describe('NOT', function() {
  var table = [
    [nand, 'a,a', 'q']
  ];
  var run = engine.runTable.bind(null, table);

  it('1', function() {
    var state = run({a: 1});
    state.q.should.equal(0);
  });

  it('0', function() {
    var state = run({a: 0});
    state.q.should.equal(1);
  });
});

describe('AND', function() {
  var table = [
    [nand, 'a,b', 'q']
    , [nand, 'q,q', 'q']
  ];
  var run = engine.runTable.bind(null, table);

  it('0,0', function() {
    var state = run({a: 0, b: 0});
    state.q.should.equal(0);
  });

  it('0,1', function() {
    var state = run({a: 0, b: 1});
    state.q.should.equal(0);
  });

  it('1,0', function() {
    var state = run({a: 1, b: 0});
    state.q.should.equal(0);
  });

  it('1,1', function() {
    var state = run({a: 1, b: 1});
    state.q.should.equal(1);
  });
});

describe('OR', function() {
  var table = [
    [nand, 'a,a', 'a']
    , [nand, 'b,b', 'b']
    , [nand, 'a,b', 'q']
  ];
  var run = engine.runTable.bind(null, table);

  it('0,0', function() {
    var state = run({a: 0, b: 0});
    state.q.should.equal(0);
  });

  it('0,1', function() {
    var state = run({a: 0, b: 1});
    state.q.should.equal(1);
  });

  it('1,0', function() {
    var state = run({a: 1, b: 0});
    state.q.should.equal(1);
  });

  it('1,1', function() {
    var state = run({a: 1, b: 1});
    state.q.should.equal(1);
  });
});

describe('NOR', function() {
  var table = [
    [nand, 'a,a', 'a']
    , [nand, 'b,b', 'b']
    , [nand, 'a,b', 'q']
    , [nand, 'q,q', 'q']
  ];
  var run = engine.runTable.bind(null, table);

  it('0,0', function() {
    var state = run({a: 0, b: 0});
    state.q.should.equal(1);
  });

  it('0,1', function() {
    var state = run({a: 0, b: 1});
    state.q.should.equal(0);
  });

  it('1,0', function() {
    var state = run({a: 1, b: 0});
    state.q.should.equal(0);
  });

  it('1,1', function() {
    var state = run({a: 1, b: 1});
    state.q.should.equal(0);
  });
});

describe('XOR', function() {
  var table = [
    [nand, 'a,b', 'c']
    , [nand, 'a,c', 'a']
    , [nand, 'b,c', 'b']
    , [nand, 'a,b', 'q']
  ];
  var run = engine.runTable.bind(null, table);

  it('0,0', function() {
    var state = run({a: 0, b: 0});
    state.q.should.equal(0);
  });

  it('0,1', function() {
    var state = run({a: 0, b: 1});
    state.q.should.equal(1);
  });

  it('1,0', function() {
    var state = run({a: 1, b: 0});
    state.q.should.equal(1);
  });

  it('1,1', function() {
    var state = run({a: 1, b: 1});
    state.q.should.equal(0);
  });
});

describe('XNOR', function() {
  var table = [
    [nand, 'a,b', 'c']
    , [nand, 'a,c', 'a']
    , [nand, 'b,c', 'b']
    , [nand, 'a,b', 'q']
    , [nand, 'q,q', 'q']
  ];
  var run = engine.runTable.bind(null, table);

  it('0,0', function() {
    var state = run({a: 0, b: 0});
    state.q.should.equal(1);
  });

  it('0,1', function() {
    var state = run({a: 0, b: 1});
    state.q.should.equal(0);
  });

  it('1,0', function() {
    var state = run({a: 1, b: 0});
    state.q.should.equal(0);
  });

  it('1,1', function() {
    var state = run({a: 1, b: 1});
    state.q.should.equal(1);
  });
});