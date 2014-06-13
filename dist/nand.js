/*global exports, module */
//
// A NAND Gate
// http://en.wikipedia.org/wiki/NAND_logic
//
// The NAND function
// Every gate can be made with nand
function nand$486(a$493, b$494) {
    if (a$493 === 0 && b$494 === 0) {
        return 1;
    } else if (a$493 > b$494) {
        return 1;
    } else if (a$493 < b$494) {
        return 1;
    }
    return 0;
}
function not$487(a$495) {
    return nand$486(a$495, a$495);
}
function and$488(a$496, b$497) {
    var result$498 = nand$486(a$496, b$497);
    return nand$486(result$498, result$498);
}
function or$489(a$499, b$500) {
    a$499 = nand$486(a$499, a$499);
    b$500 = nand$486(b$500, b$500);
    return nand$486(a$499, b$500);
}
function nor$490(a$501, b$502) {
    a$501 = nand$486(a$501, a$501);
    b$502 = nand$486(b$502, b$502);
    var c$503 = nand$486(a$501, b$502);
    return nand$486(c$503, c$503);
}
function xor$491(a$504, b$505) {
    var c$506 = nand$486(a$504, b$505);
    a$504 = nand$486(a$504, c$506);
    b$505 = nand$486(c$506, b$505);
    return nand$486(a$504, b$505);
}
function xnor$492(a$507, b$508) {
    var c$509 = nand$486(a$507, b$508);
    a$507 = nand$486(a$507, c$509);
    b$508 = nand$486(c$509, b$508);
    c$509 = nand$486(a$507, b$508);
    return nand$486(c$509, c$509);
}
module.exports = nand$486;
module.exports.not = not$487;
module.exports.and = and$488;
module.exports.or = or$489;
module.exports.nor = nor$490;
module.exports.xor = xor$491;
module.exports.xnor = xnor$492;