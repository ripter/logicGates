/*global require, describe, it */
var should = require('should');
var input = require('../src/input');
var nand = require('../src/nand');
var engine = require('../src/engine');


it('Tape and 1,1', function() {
  engine.runTape([
	  input.switchOn
		, input.assertOn
	  ]);
});

it('Table and 1,1', function() {
  engine.runTable([
    //Function, args, result
    [input.switchOn, null, 'a']
    , [input.assertOn, 'a', null]
  ]);
});