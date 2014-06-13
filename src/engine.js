/*global module */

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

module.exports = {
  runTape: runTape
};