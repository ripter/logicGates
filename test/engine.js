/*global require, describe, it */
var should = require('should');
var input = require('../src/input');
var nand = require('../src/nand');
var engine = require('../src/engine');


it('Tape and 1,1', function() {
  //attach(nand, input.switchOn());
  engine.runTape([
	  input.switchOn
		, input.switchOn
		, input.assertOn
	  ]);
});