let respuesta = document.getElementById("text");
const edadesManana = [];
const edadesTarde = [];
const edadesNoche = [];
let edadM;
let edadT;
let edadN;
let contadorM = 0, contadorT = 0, contadorN = 0;

for (let i = 0; i < 5; i++) {
    edadM = Number(prompt("Ingrese la edad para el turno de la mañana: "));
    edadesManana.push(edadM);
    contadorM += edadesManana[i];
}

for (let i = 0; i < 6; i++){
    edadT = Number(prompt("Ingrese la edad para el turno de la tarde: "));
    edadesTarde.push(edadT);
    contadorN += edadesTarde[i];
}

for (let i = 0; i < 11 ; i++) {
    edadN|= Number(prompt("Ingrese la edad para el turno nocturo "))
    edadesNoche.push(edadN);
    contadorT += edadesNoche[i];
}

//calculamos la media de cada turno 
let promedioM = contadorM / 5; 
let promedioT = contadorT / 6;
let promedioN = contadorN / 11;

respuesta.innerText=("Promedio de la mañana: "+promedioM+"\n");
respuesta.innerText+=("Promedio de la tarde: "+promedioT+"\n");
respuesta.innerText+=("Promedio de la noche: "+promedioN+"\n");

if(promedioM > promedioT && promedioM > promedioN){

    respuesta.innerText+=("El promedio de edades de el turno de la mañana es mayor");
}
else if(promedioT > promedioM && promedioT > promedioN){

    respuesta.innerText+=("El promedio de edades de el turno de la tarde es mayor");

}else if(promedioN > promedioM && promedioN > promedioT){

    respuesta.innerText+=("El promedio de edades de el turno de la noche es mayor");

}


