import { addTwo, subTwo } from './calc';

let n1=3;
let result:number;

result = addTwo(2,3);
console.log(`Result1 = ${result}`);
result = addTwo(n1,5);
console.log(`Result2 = ${result}`);
result = addTwo(66,55);
console.log(`Result3 = ${result}`);

result = subTwo(100, 33);
console.log(`Takeway Result = ${result}`);