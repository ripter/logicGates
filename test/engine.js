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