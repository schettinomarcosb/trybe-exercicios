// // // // const myName = "Marcos";
// // // // const birthCity= "Juiz de Fora";
// // // // let birthYear = 1999;
// // // // console.log(myName);
// // // // console.log(birthCity);
// // // // console.log(birthYear);
// // // // birthYear = 2030; 
// // // // console.log(birthYear);
// // // // birthCity = "Leopoldina";
// // // // console.log(birthCity);
// // // let patientId = 50;
// // // let isEnrolled = true;
// // // const patientInfo = {
// // //   firstName: 'Ana',
// // //   lastName: 'Santos',
// // // };
// // // const patientEmail = 'ana@email.com';
// // // console.log(typeof patientInfo);
// // // console.log(typeof patientEmail);
// // nota = 50;
// // if (nota>=80) {
// //     console.log("Aprovado");
// // }
// // else if (nota<80 && nota>=60) {
// //     console.log("Lista de Espera");
// // }
// // else {
// //     console.log("Reprovado")
// // }
// const currentHour = 7;
// let message ="";
// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir";
// }
// else if (currentHour >= 18 && currentHour< 22) {
//     message = "Rango da noite, vamos jantar :D";
// }
// else if (currentHour >= 14 && currentHour< 18) {
//     message = "Vamos fazer um bolo pro café da tarde?";
// }
// else if (currentHour >= 11 && currentHour< 14) {
//     message = "Hora do almoço!!!";
// }
// else if (currentHour >= 4 && currentHour< 11) {
//     message = "Hmmm, cheiro de café recém passado";
// }
// console.log(message);

let resultado;
let nota = 50;
switch(resultado) {
	case nota >=80:
		resultado = "aprovado";
		break;
	case nota >=60 %% nota < 80:
		resultado = "lista";
		break;
	case nota < 60:
		resultado = "reprovado";
		break;
	default:
		resultado = "não se aplica";
}
console.log (resultado);

}