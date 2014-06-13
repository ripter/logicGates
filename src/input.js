/*global module */

// Switch
// Always returns state.
function swth(state) {
  return function() {
    return state;
  }
}

function assert(state) {
  return function(item) {
    item.should.equal(state);
  }
}


var input = {
  switchOn: swth(1)
  ,switchOff: swth(0)
  ,assertOn: assert(1)
  , assertOff: assert(0)
};

module.exports = input;