var nombre;
var money;
var contador = 3;

if (contador == 3 ){

    //Compra Roberto
    var nombre = prompt('¿Cómo te llamas?');
    var money = prompt(`Hola ${nombre} ¿cuánto dinero tienes?`);
    money = parseFloat(money);

    if (money >= 1 && money < 2){
        alert(`${nombre}, cómprate la paleta de mango.`);
        alert("Tu vuelto es: " + (money - 1) + " USD"); 
    }
    else if (money >= 2 && money < 5){
        alert(`${nombre}, cómprate la paleta de crema real.`);
        alert("Tu vuelto es: " + (money - 2) + " USD"); 
    }
    else if (money >= 5 && money < 8){
        alert(`${nombre}, cómprate el Pote de helado con trocitos de piña`);
        alert("Tu vuelto es: " + (money - 5) + " USD"); 
    }
    else if (money >= 8 && money < 10){
        alert(`${nombre}, cómprate el helado Oreo Cali o el helado Trisabor Tío Rico`);
        alert("Tu vuelto es: " + (money - 8) + " USD"); 
    }
    else if (money >= 10 && money < 14){
        alert(`${nombre}, cómprate el helado Trisabor Efe`);
        alert("Tu vuelto es: " + (money - 10) + " USD"); 
    }
    else if (money >= 14){
        alert(`${nombre}, cómprate el Pote de 3KG Helado de fresa`);
        alert("Tu vuelto es: " + (money - 14) + "USD"); 
    
    }
    else{
        alert("Lo siento, pero no te alcanza para ninguno");
    }

    contador--;

    if (contador == 2 ){

        contador--;

        //Compra Pedro
        var nombre = prompt('¿Cómo te llamas?');
        var money = prompt(`Hola ${nombre} ¿cuánto dinero tienes?`);
        money = parseFloat(money);

        if (money >= 1 && money < 2){
            alert(`${nombre}, cómprate la paleta de mango.`);
            alert("Tu vuelto es: " + (money - 1) + " USD"); 
        }
        else if (money >= 2 && money < 5){
            alert(`${nombre}, cómprate la paleta de crema real.`);
            alert("Tu vuelto es: " + (money - 2) + " USD"); 
        }
        else if (money >= 5 && money < 8){
            alert(`${nombre}, cómprate el Pote de helado con trocitos de piña`);
            alert("Tu vuelto es: " + (money - 5) + " USD"); 
        }
        else if (money >= 8 && money < 10){
            alert(`${nombre}, cómprate el helado Oreo Cali o el helado Trisabor Tío Rico`);
            alert("Tu vuelto es: " + (money - 8) + " USD"); 
        }
        else if (money >= 10 && money < 14){
            alert(`${nombre}, cómprate el helado Trisabor Efe`);
            alert("Tu vuelto es: " + (money - 10) + " USD"); 
        }
        else if (money >= 14){
            alert(`${nombre}, cómprate el Pote de 3KG Helado de fresa`);
            alert("Tu vuelto es: " + (money - 14) + "USD"); 
        
        }
        else{
            alert("Lo siento, pero no te alcanza para ninguno");
        }
    }

    if (contador == 1 ){

        contador--;

        //Compra Pedro
        var nombre = prompt('¿Cómo te llamas?');
        var money = prompt(`Hola ${nombre} ¿cuánto dinero tienes?`);
        money = parseFloat(money);

        if (money >= 1 && money < 2){
            alert(`${nombre}, cómprate la paleta de mango.`);
            alert("Tu vuelto es: " + (money - 1) + " USD"); 
        }
        else if (money >= 2 && money < 5){
            alert(`${nombre}, cómprate la paleta de crema real.`);
            alert("Tu vuelto es: " + (money - 2) + " USD"); 
        }
        else if (money >= 5 && money < 8){
            alert(`${nombre}, cómprate el Pote de helado con trocitos de piña`);
            alert("Tu vuelto es: " + (money - 5) + " USD"); 
        }
        else if (money >= 8 && money < 10){
            alert(`${nombre}, cómprate el helado Oreo Cali o el helado Trisabor Tío Rico`);
            alert("Tu vuelto es: " + (money - 8) + " USD"); 
        }
        else if (money >= 10 && money < 14){
            alert(`${nombre}, cómprate el helado Trisabor Efe`);
            alert("Tu vuelto es: " + (money - 10) + " USD"); 
        }
        else if (money >= 14){
            alert(`${nombre}, cómprate el Pote de 3KG Helado de fresa`);
            alert("Tu vuelto es: " + (money - 14) + "USD"); 
        
        }
        else{
            alert("Lo siento, pero no te alcanza para ninguno");
        }
    }

    alert("Las ventas han acabado por hoy, vuelve mañana <3")
}
