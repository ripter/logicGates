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

// TEMP
it('and 1,1', function() {
  //attach(nand, input.switchOn());
  run([
	  input.switchOn
		, input.switchOn
		, input.assertOn
	  ]);
});

function run(tape) {
  var stack = [];
  var i, x;

  for(i = 0; i < tape.length; i++) {
    var func = tape[i];
    var params = [];
    var result;

    // I'm pretty sure I could slice or something there
    for (x=0; i < func.length; i++) {
      params.push(stack.pop());
    }

		result = func.apply(func, params);
    stack.push(result);
  }
}
// END TEMP