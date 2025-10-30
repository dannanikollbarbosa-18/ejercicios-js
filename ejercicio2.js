// promedio.js


let nombre = "nikoll"

let nota1 = 4.2;
let nota2 = 3.5;
let nota3 = 5.0;

let promedio = (nota + nota1 + nota2) / 3;

console.log(`El nombre del estudiante es: ${nombre}`)
console.log(`Las notas son: ${nota1},${nota2},${nota3}`)
console.log(`promedio: ${promedio.toFixed(1)}`)

if (promedio >= 3.5) {
    console.log("aprobado")
}else{
    console.log("reprobado")
}