// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// console.log('Bem-vinda, ' + info.personagem);
// info['recorrente'] = 'sim';
// console.log(info);
// for(let key in info) {
//   console.log(key);
// }
// for(let key in info) {
//   console.log(info[key]);
// }
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'sim'
// };
// for(let key in info) {
//   if (key !== 'recorrente') {
//     console.log(info[key] + ' e ' + info2[key]);
//   }
//   else {
//     if(info[key] === 'sim' && info2[key] === 'sim') {
//       console.log('Ambos recorrentes')
//     }
//   }
// }

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// let tituloLivro = leitor.livrosFavoritos[0].titulo;
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '\"' + tituloLivro + '\"');
// leitor.livrosFavoritos.push(
//   {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco'
//   }
// )
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

// let palavra = "marcos";
// function verificaPalindromo (palavra) {
//   let contrario = palavra.split('').reverse().join('');
//   if (contrario == palavra) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(verificaPalindromo('arara'));
// console.log(verificaPalindromo('desenvolvimento'));

// function biggestIndex(array) {
//   let biggest = 0;
//   for (let index in array) {
//     if(array[biggest] < array[index]) {
//       biggest = index;
//     }
//   }
//   return biggest;
// }
// console.log(biggestIndex([2, 3, 6, 7, 10, 1]))

// function smallestIndex(array) {
//   let smallest = 0;
//   for (let index in array) {
//     if (array[smallest] > array[index]) {
//       smallest = index;
//     }
//   }
//   return smallest;
// }
// console.log(smallestIndex([2, 4, 6, 7, 10, 0, -3]))

// function biggestName (arrayNomes) {
//   let biggest = arrayNomes[0];
//   for (let index in arrayNomes) {
//     if (arrayNomes[index].length > biggest.length) {
//       biggest = arrayNomes[index]
//     }
//   }
//   return biggest
// }
// console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// function mostRepeated (numeros) {
//   let counter = 0;
//   let repetido = 0;
//   for (index in numeros) {
    
//   }
// }

// function somatorio(numero) {
//   let soma = 0;
//   for (let index = numero; index > 0; index -= 1) {
//     soma += index;
//   }
//   return soma
//   }
// console.log(somatorio(5));

// function verificaFim (word, ending) {
//   word = word.split('');
//   ending = ending.split('');
//   controle = true;
//   for (let index = 0; index <= ending.length; index += 1) {
//     if (word[word.length - ending. length + index] !== ending[index]) {
//       controle = false;
//     }
//   }
//   return controle;
// }
// console.log(verificaFim('trybe','ybe'));
// console.log(verificaFim('trybe','tybe'));

//Bônus 1:
let romanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
}
function calculaRomano(string) {
  string = string.split('');
  contador = 0;
  for(let index = 0; index < string.length; index += 1) {
    for (index2 in romanos) {
      if (romanos[index2] == string[index]) {
        contador = romanos.string[index] 
      }
    }
  }
}