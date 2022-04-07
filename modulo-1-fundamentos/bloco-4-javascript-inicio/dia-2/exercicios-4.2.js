let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let number of numbers) {
//   console.log(number);
// }
//  let sum = 0;
// for (let index = 0; index < numbers.length; index +=1) {
//   sum += numbers[index];
// }
// console.log(sum);
// let arithmeticAverage = 0;
// for (let index = 0; index < numbers.length; index +=1) {
//   sum += numbers[index];
//   arithmeticAverage = sum/numbers.length;
// }
// console.log(arithmeticAverage);
// if (arithmeticAverage > 20) {
//   console.log("valor maior que 20");
// }
// else {
//   console.log("valor menor ou igual a 20");
// }
// let highest = 0;
// for(let index = 0; index < numbers.length; index+=1) {
//   if (numbers[index] > highest) {
//     highest = numbers[index]
//   }
// }
// console.log(highest)
// let odds = 0;
// for (let index = 0; index < numbers.length; index +=1) {
//   if (numbers[index] % 2 == 1) {
//     odds += 1;
//   }
// }
// if (odds == 0) {
//   console.log ("nenhum valor ímpar encontrado");
// }
// else {
//   console.log (odds);
// }
// let lowest = 999999;
// for(let index = 0; index < numbers.length; index+=1) {
//   if (numbers[index] < lowest) {
//     lowest = numbers[index]
//   }
// }
// console.log(lowest)
let array = [];
for (let index = 1; index <= 25; index += 1) {
array.push(index/2);
}
console.log(array);
