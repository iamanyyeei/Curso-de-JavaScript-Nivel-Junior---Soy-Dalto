let entradaFree =  false;

const validarInvitado = (time)=>{
    let edad = prompt("¿Cuántos años tienes");
    if (edad >= 18){
        if(time >= 2 && time < 7 && entradaFree == false){
            alert("Pasas gratis por ser la primera persona después de las 02:00A.M.")
            entradaFree = true;
        }
        else{
            alert("Tienes que pagar tu entrada para pasar");
        }
    }
    else{
        alert("No puedes pasar");
    }
}

validarInvitado(23);
validarInvitado(24);
validarInvitado(1);
validarInvitado(1.5);
validarInvitado(2);
validarInvitado(3);