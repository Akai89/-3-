let a = 13.123456789;
let b = 2.123;
let n = 5;

let one = Math.round(a % 1* Math.pow(10,n));
let two = Math.round(b % 1* Math.pow(10,n));

console.log(one, two);

console.log('', a === b);
console.log('', one === two);
console.log('', one > two);
console.log('', one < two);
console.log('', one != two);
console.log('', one >= two);
console.log('', one <= two);