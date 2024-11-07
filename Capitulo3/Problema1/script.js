
class celular {
    constructor(color,peso,rdp,rdc,ram){

        //CARACTERISTICAS
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = rdp;
        this.resolucionCamara = rdc;
        this.memoriaRam = ram;

        //MÉTODOS
        this.encender = false;
    }

    //MÉTODOS
    presionarBotonEncendido(){
        if(this.encender == false){
            alert("Encendiendo celular");
            this.encender == true;
        }else{
            alert("Apagando celular");
            this.encender == false;
        }
    }

    reinicio(){
        if(this.encender == true){
            alert("Reiniciando celular");
        }else{
            alert("El celular está apagado");
        }
    }

    takePhotos(){
        alert(`La foto se tomó con una resolución de: ${this.resolucionCamara}`);
    }

    grabarVideo(){
        alert(`El video se grabó con resolución de: ${this.resolucionCamara}`);
    }

    mostrarInfo(){
        return `
         Color: <b>${this.color}</b> <br>
         Peso: <b>${this.peso}</b> <br>
         Tamaño: <b>${this.resolucionPantalla}</b> <br>
         Resolución de Vídeo: <b>${this.resolucionCamara}</b> <br>
         Memoria RAM: <b>${this.memoriaRam}</b> <br>
        `
    }
}

let samsungJ6 = new celular("blanco","154 g","5.6 pulgadas","HD (1480x720)","4GB");

let redmi7 = new celular("azul","180 g","6.26 pulgadas","HD(1520x720)", "3GB");

let kripK6 = new celular("gris","100 g","5 pulgadas","HD", "1GB");

document.write(`
    Celular 1: <br><br>
    ${samsungJ6.mostrarInfo()} <br><br>
    Celular 2: <br><br>
    ${redmi7.mostrarInfo()} <br><br>
    Celular 3: <br><br>
    ${kripK6.mostrarInfo()} <br><br>
`);

//Funciones celular1
samsungJ6.presionarBotonEncendido();
samsungJ6.takePhotos();
samsungJ6.grabarVideo();
samsungJ6.presionarBotonEncendido();
