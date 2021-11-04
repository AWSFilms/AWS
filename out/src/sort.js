"use strict";
var sorted1 = [1, 4, 7, 8];
var sorted2 = [2, 5, 7, 9, 11, 15, 19, 22];
var numbers = sorted1.concat(sorted2);
numbers.sort(function (a, b) { return b - a; });
console.log(numbers);
//# sourceMappingURL=sort.js.map