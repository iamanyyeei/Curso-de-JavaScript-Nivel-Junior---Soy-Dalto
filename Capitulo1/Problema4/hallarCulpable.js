//Si está mintiendo devuelve 1.
//Si no está mintiendo devuelve 2.
//En caso de indecisión devuelve 3.

alert('Bienvenido al mejor detector de mentiras jamás creado :) Ayudaremos a encontrar al culpable de este gran crimen');

let sospechoso1 = prompt('¿Cuál es el nombre del sospechoso Nro 1?');

let sospechoso2 = prompt('¿Cuál es el nombre del sospechoso Nro 2?');

let sospechoso3 = prompt('¿Cuál es el nombre del sospechoso Nro 3?');

let respuesta = prompt(` ${sospechoso1}, ¿usted desvivió al gato de Lucas?`)

if(respuesta == "si" || respuesta == "no"){

  //Generar número aleatorio para la pregunta
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let numeroAleatorio = generarNumeroAleatorio(1, 3);
  
  if(numeroAleatorio == 1){
    alert("MIENTES ⚡ Recibes a cambio una descarga eléctrica");
  } else if (numeroAleatorio == 2){
      alert("NO estás mintiendo 😆 ");
  } else {
      alert("La máquina no se decide 😵 La pregunta debe ser MÁS CLARA ");
  }

}

let respuesta2 = prompt(` ${sospechoso2}, ¿usted desvivió al gato de Lucas?`)

if(respuesta2 == "si" || respuesta2 == "no"){

  //Generar número aleatorio para la pregunta
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let numeroAleatorio = generarNumeroAleatorio(1, 3);
  
  if(numeroAleatorio == 1){
    alert("MIENTES ⚡ Recibes a cambio una descarga eléctrica");
  } else if (numeroAleatorio == 2){
      alert("NO estás mintiendo 😆 ");
  } else {
      alert("La máquina no se decide 😵 La pregunta debe segit adr MÁS CLARA ");
  }

}

let respuesta3 = prompt(` ${sospechoso3}, ¿usted desvivió al gato de Lucas?`)

if(respuesta3 == "si" || respuesta3 == "no"){

  //Generar número aleatorio para la pregunta
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let numeroAleatorio = generarNumeroAleatorio(1, 3);
  
  if(numeroAleatorio == 1){
    alert("MIENTES ⚡ Recibes a cambio una descarga eléctrica");
  } else if (numeroAleatorio == 2){
      alert("NO estás mintiendo 😆 ");
  } else {
      alert("La máquina no se decide 😵 La pregunta debe ser MÁS CLARA ");
  }

}