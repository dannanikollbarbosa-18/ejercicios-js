// verificacion de par o impar

const prompt = require('prompt-sync')();

let numero = Number(prompt("Ingrese un número: "));

if (numero % 2 === 0) {
  console.log(`El número ${numero} es Par `);
} else {
  console.log(`El número ${numero} es Impar`);
}