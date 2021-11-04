const sorted1 = [1, 4, 7, 8];
const sorted2 = [2, 5, 7, 9, 11, 15, 19, 22];

const numbers = sorted1.concat(sorted2);

numbers.sort(function(a: number, b: number){return b - a});

console.log(numbers);