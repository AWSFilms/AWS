"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subTwo = exports.addTwo = void 0;
function addTwo(p1, p2) {
    if ((p1 === undefined) || (p2 === undefined)) {
        return -1;
    }
    return p1 + p2;
}
exports.addTwo = addTwo;
function subTwo(p1, p2) {
    if ((p1 === undefined) || (p2 === undefined)) {
        return -1;
    }
    return p1 - p2;
}
exports.subTwo = subTwo;
