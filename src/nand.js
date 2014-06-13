/*global exports, module */
//
// A NAND Gate
// http://en.wikipedia.org/wiki/NAND_logic
//

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

module.exports = nand;