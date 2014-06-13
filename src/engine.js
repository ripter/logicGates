/*global module */

//
// pros:
//   tape doesn't need to keep track of variables
// cons:
//   funcs have to manage the stack
//
function runTape(tape) {
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

//
// pros:
//   funcs always get the expected value
// con:
//   table needs to keep track of variables
//
function runTable(table) {
  var state = {};
}

module.exports = {
  runTape: runTape
  , runTable: runTable
};