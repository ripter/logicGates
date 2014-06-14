/*global module */

var MAX_PASS = 10;
//
// acceptance:
//   http://en.wikipedia.org/wiki/Sequential_logic
//
function runTable(table, state, pass) {
  var hash = JSON.stringify(state);

  // if we don't have pass, make it MAX_PASS
  pass = typeof pass === 'undefined' ? MAX_PASS : pass;

  // Run all the rows over state
  table.forEach(function(row) {
    state = runInstruction(state, row);
  });

  // If state has changed, we are not stable
  // Keep running until either we run our of passes
	// or we reach a stable signal
  if (pass > 0 && JSON.stringify(state) != hash) {
    return runTable(table, state, --pass);
  }

  // return state
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
    // If it doesn't exist yet, it's 0
    var val = state[key] || 0;
    params.push(val);
  });

  // call the func with the state params
  result = func.apply(null, params);

  // for each output, change the value in state
  output.forEach(function(key) {
    state[key] = result;
  });

  return state;
}

module.exports = {
  runTable: runTable
};
