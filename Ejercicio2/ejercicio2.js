const respuesta = document.getElementById("text");
let nombre = prompt("Ingrese su nombres y apellidos, por favor: ");
let carnet = prompt("Ingrese su carnet, por favor");
let notaExam = prompt("Ingrese la nota de su examen: ");
let notaTarea= prompt("Ingrese la nota de su tarea: ");
let notaAsistencia= prompt("Ingrese la nota de su asistencia: ");
let notaPro = prompt("Ingrese la nota de su proyecto: ")

function calculaNotas(exam,tarea,asis,pro){

    let notaFinal = (exam * 0.20) + (tarea * 0.40) + (asis * 0.10) + (pro * 0.30)
    
    respuesta.innerText=("Nombre: "+nombre+"\n");
    respuesta.innerText+=("Carnet: "+carnet+"\n");
    respuesta.innerText+=("Su nota es de: "+notaFinal);
    
}

calculaNotas(notaExam,notaTarea,notaAsistencia,notaPro);
