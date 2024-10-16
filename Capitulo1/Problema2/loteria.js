let nombre;
let boleto;
var dinero;
var cantidad;
var conf;

const kino = 5;
const ganaMas = 2;

nombre = prompt('Bienvenido a la Lotería Online, ¿cómo te llamas?');

boleto = prompt(nombre + ', a continuación te mostraré los boletos disponibles: \n\n 1. KINO (PREMIO POR 10.000 USD) - $5 \n2. GANA MÁS (PREMIO POR 5.000 USD) - $2.5\n\n Indica con 1 o 2 cuál boleto deseas comprar')

if( boleto == 1){
    dinero = prompt('¿Cuánto dinero tienes?');
    parseInt(dinero);

    if(dinero >= kino && dinero < 11){

        cantidad = dinero / kino;

        conf = prompt('Puedes comprar ' + Math.round(cantidad) + ' boletos KINO. Por favor confima la compra con un si');

        if(conf === "si" || conf === "SI" || conf == "Si"){
    
            alert('Gracias por comprar '  + Math.round(cantidad) + ' boletos KINO. Tu vuelto es: ' + (dinero - kino*Math.round(cantidad)) +', ¡suerte!');
            
        } else {
            alert('Entendemos que no quieras comprar un boleto ahora :(');
        }
    } 
} else if( boleto == 2){

    dinero = prompt('¿Cuánto dinero tienes?');
    parseInt(dinero);

    if(dinero >= ganaMas && dinero < 11){

        cantidad = dinero / ganaMas;
    
        conf = prompt('Puedes comprar ' + Math.round(cantidad) + ' boletos KINO. Por favor confima la compra con un si');
    
        if(conf === "si" || conf === "SI" || conf == "Si"){
    
            alert('Gracias por comprar '  + Math.round(cantidad) + ' boletos GANA MÁS. Tu vuelto es: ' + (dinero - ganaMas*Math.round(cantidad)) +', ¡suerte!');
            
            
        } else {
            alert('Entendemos que no quieras comprar un boleto ahora :(');
        }
    }
} else {
    alert('Estaremos acá para cuando quieras probar tu suerte :D')
}
