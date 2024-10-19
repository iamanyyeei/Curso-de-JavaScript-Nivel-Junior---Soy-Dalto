//Si está mintiendo devuelve 1.
//Si no está mintiendo devuelve 2.
//En caso de indecisión devuelve 3.

alert('Bienvenido al mejor detector de mentiras jamás creado :) Hoy descubriremos quién se tomó la Coca Cola del jefe');

let sospechoso1 = prompt('¿Cuál es el nombre del sospechoso Nro 1?');

let sospechoso2 = prompt('¿Cuál es el nombre del sospechoso Nro 2?');

let sospechoso3 = prompt('¿Cuál es el nombre del sospechoso Nro 3?');

let respuesta = prompt(` ${sospechoso1}, ¿usted se tomó la Coca Cola, sí o no?`)

if(respuesta == "si" || respuesta == "no"){

  //Generar número aleatorio para la pregunta
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let numeroAleatorio = generarNumeroAleatorio(1, 3);
  
  if(numeroAleatorio == 1){
    alert("Usted está mintiendo, te tomaste la Coca Cola.");
  } else if (numeroAleatorio == 2){
      alert("NO estás mintiendo, puedes irte");
  } else {
      alert("El sospechoso está indeciso");
  }

}

let respuesta2 = prompt(` ${sospechoso2}, ¿usted se tomó la Coca Cola, sí o no?`)

if(respuesta2 == "si" || respuesta2 == "no"){

  //Generar número aleatorio para la pregunta
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let numeroAleatorio = generarNumeroAleatorio(1, 3);
  
  if(numeroAleatorio == 1){
    alert("Usted está mintiendo, te tomaste la Coca Cola.");
  } else if (numeroAleatorio == 2){
      alert("NO estás mintiendo, puedes irte");
  } else {
      alert("El sospechoso está indeciso");
  }

}

let respuesta3 = prompt(` ${sospechoso3}, ¿usted se tomó la Coca Cola, sí o no?`)

if(respuesta3 == "si" || respuesta3 == "no"){

  //Generar número aleatorio para la pregunta
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let numeroAleatorio = generarNumeroAleatorio(1, 3);
  
  if(numeroAleatorio == 1){
    alert("Usted está mintiendo, te tomaste la Coca Cola.");
  } else if (numeroAleatorio == 2){
      alert("NO estás mintiendo, puedes irte");
  } else {
      alert("El sospechoso está indeciso");
  }

}