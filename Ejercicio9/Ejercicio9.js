let respuesta = document.getElementById("text");
let temperatura = Number(prompt("Ingrese la temperatura en grados celcius: "));
let F = (temperatura * 1.8) + 32;


    if (F >= 14 && F < 32){
        respuesta.innerText=(F + "°F"+"\n")
        respuesta.innerText+=("La temperatura es Baja")
}

    else if (F >= 32 && F < 68){
        respuesta.innerText=(F + "°F"+"\n")
        respuesta.innerText+=("La temperatura es Adecuada")
}

   else if (F >= 68 && F <= 96){
        respuesta.innerText=(F + "°F"+"\n")
        respuesta.innerText+=("La temperatura es Alta")
}

    else{
        respuesta.innerText=("Temperatura desconocida")
        
}