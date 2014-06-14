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
// acceptance:
//   http://en.wikipedia.org/wiki/Sequential_logic
// pros:
//   funcs always get the expected value
//   easier to trace connections
// cons:
//   table needs to keep track of variables
//
function runTable(table, state) {
  table.forEach(function(row) {
    state = runInstruction(state, row);
  });

  return state;
}

function runInstruction(state, row) {
  var func = row[0];
  var input = row[1].split(',');
  var output = row[2].split(',');
  var params = [];
  var result;

  // for each input, add it to the params array
  input.forEach(function(key) {
    params.push(state[key]);
  });

  result = func.apply(null, params);

  // for each output, change the value in state
  output.forEach(function(key) {
    state[key] = result;
  });

  return state;
}

module.exports = {
  runTape: runTape
  , runTable: runTable
};
