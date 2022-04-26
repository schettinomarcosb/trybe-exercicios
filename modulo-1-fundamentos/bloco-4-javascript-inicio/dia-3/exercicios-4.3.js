//exercício 1 - fatoriais
// let n = 10
// let fatorial = 1;
// for (let index = 1; index <= n; index += 1) {
// fatorial = fatorial * index;
// }
// console.log (fatorial);

//exercício 2 - inverter palavras
// let word = 'trybe';
// let inverseWord = '';
// for (let index = word.length-1; index >= 0; index -= 1) {
//   inverseWord += word[index];
// }
// console.log(inverseWord);

//exercício 3 - maior e menor palavra
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let biggestWord = array[0];
// let smallestWord = array[0];
// for (let index = 0; index < array.length; index += 1) {
//     if (biggestWord.length < array[index].length) {
//       biggestWord = array[index];
//     }
// }
// for (let index = 0; index < array.length; index += 1) {
//   if (smallestWord.length > array[index].length) {
//     smallestWord = array[index];
//   }
// }
// console.log(biggestWord);
// console.log(smallestWord);

//exercício 4 - números primos 
// let maiorPrimo = 0;
// for(let index = 0; index <= 50; index += 1) {
//   let primo = true;
//   for (let index2 = 2; index2 < index; index2 += 1) {
//     if (index % index2 == 0) {
//       primo = false;
//     }
//   }
//   if (primo == true) {
//     maiorPrimo = index;
//   }
// }
// console.log(maiorPrimo);