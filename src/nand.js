/*global module */
'use strict';

//
// A NAND Gate
// http://en.wikipedia.org/wiki/NAND_logic
//

// The NAND function
// Every gate can be made with nand
function nand(a, b) {
  if( a === 0 && b === 0 ){
	  return 1;
  }
  else if( a > b ){
    return 1;
  }
  else if( a < b ){
    return 1;
  }
  return 0;
}

function not(a) {
  return nand(a, a);
}

function and(a, b) {
  var result = nand(a, b);
  return nand(result, result);
}

function or(a, b) {
  a = nand(a, a);
  b = nand(b, b);
  return nand(a, b);
}

function nor(a, b) {
  a = nand(a, a);
  b = nand(b, b);
  var c = nand(a, b);
  return nand(c, c);
}

function xor(a, b) {
  var c = nand(a, b);
  a = nand(a, c);
  b = nand(c, b);
  return nand(a, b);
}

function xnor(a, b) {
  var c = nand(a, b);
  a = nand(a, c);
  b = nand(c, b);
  c = nand(a, b);
  return nand(c, c);
}

module.exports = nand;
module.exports.not = not;
module.exports.and = and;
module.exports.or = or;
module.exports.nor = nor;
module.exports.xor = xor;
module.exports.xnor = xnor;