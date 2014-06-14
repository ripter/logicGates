/*global module */

// Switch
// Always returns state.
function swth(state) {
  return function() {
    return state;
  }
}

var input = {
  switchOn: swth(1)
  ,switchOff: swth(0)
};

module.exports = input;