let entradaFree =  false;

const validarInvitado = (time)=>{
    let edad = prompt("¿Cuántos años tienes");
    if (edad >= 18){
        if(time >= 2 && time < 7 && entradaFree == false){
            alert("Pasas gratis por ser la primera persona después de las 02:00A.M.")
            entradaFree = true;
        }
        else{
            alert("Puedes pasar, pero primero paga tu entrada :D ");
        }
    }
    else{
        alert("No puedes pasar");
    }
}

validarInvitado(11);
validarInvitado(12);
validarInvitado(1);
validarInvitado(2);
validarInvitado(3);