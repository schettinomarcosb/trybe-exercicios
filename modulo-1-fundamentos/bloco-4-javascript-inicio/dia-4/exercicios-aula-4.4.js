// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: { 
//     golden: 2, 
//     silver: 3 },
// }
// player['fullName'] = player.name + ' ' + player.lastName;
// console.log('A jogadora ' + player.fullName + ' tem ' + player.age + ' anos de idade.');
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// let bestInTheWorldTimes = player.bestInTheWorld.length
// console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' +bestInTheWorldTimes + ' vezes');
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for(let person in names) {
  console.log('Olá ' + names[person]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let key in car) {
  console.log(key, car[key]);
}