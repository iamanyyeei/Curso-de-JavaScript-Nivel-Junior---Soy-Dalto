let cantidad = prompt("¿Cuántos alumnos tiene esta clase?");

let totalAlumnos = [];

//Cantidad de alumnos en lista
for (i = 0; i < cantidad; i++){
    //Este array guarda: nombre más asistencia
    totalAlumnos[i] = [prompt("Nombre del estudiante " + (i+1)),0];
}

//Toma asistencia con P o A
const registroAsistencia = (nombre,p) => {
    let presencia = prompt("Tomar asistencia de " + nombre);
    if (presencia == "p" || presencia == "P") {
        totalAlumnos[p][1]++;
    }
}

//Registra los 30 días
for (i = 0; i < 30; i++ ){
    for (alumno in totalAlumnos){
        registroAsistencia(totalAlumnos[alumno][0],alumno);
    }
}

//Situacion final de los alumnos
for (alumno in totalAlumnos){
    let resultado = `<b>${totalAlumnos[alumno][0]}:</b> <br><br>
    Asistencias: ${totalAlumnos[alumno][1]} <br>
    Faltas: ${30 - totalAlumnos[alumno][1]}
    `
    if (30 - totalAlumnos[alumno][1] > 18){
        resultado+= "<b>Reprobado por NO asistir a clases</b>";
    } else{
        resultado+= "<br><br>";
    }
    document.write(resultado);
}