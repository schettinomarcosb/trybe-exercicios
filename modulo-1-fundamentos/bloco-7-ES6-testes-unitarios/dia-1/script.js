
// let testingScope = escopo => {
//   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     const test = (escopo === true) ? `${ifScope} ótimo, fui utilizada no escopo!` : `não devo ser utilizada fora do meu escopo`;
//     console.log(test);
// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenado = oddsAndEvens => {
  return oddsAndEvens.sort();
}
console.log(ordenado(oddsAndEvens));
