
const suma = (num1,num2) => {
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1,num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplicacion = (num1,num2) => {
    return parseInt(num1) * parseInt(num2);
}

const division = (num1,num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert('Dime qué operación quieres hacer:');
let op = prompt ("1. suma   2. Resta  3. Multiplicación   4. División");

if (op == 1){

    let num1 = prompt("Dime el primer valor");
    let num2 = prompt("Dime el primer valor");
    let resultado = suma(num1,num2);
    document.write(resultado);

} else if (op == 2){

    let num1 = prompt("Dime el primer valor");
    let num2 = prompt("Dime el primer valor");
    let resultado = resta(num1,num2);
    document.write(resultado);

} else if (op == 3){

    let num1 = prompt("Dime el primer valor");
    let num2 = prompt("Dime el primer valor");
    let resultado = multiplicacion(num1,num2);
    document.write(resultado);

} else if (op == 4){

    let num1 = prompt("Dime el primer valor");
    let num2 = prompt("Dime el primer valor");
    let resultado = division(num1,num2);
    document.write(resultado);

} else {

    alert("No hay más módulos, chao");

}