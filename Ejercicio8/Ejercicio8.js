let respuesta = document.getElementById("text");
let numMulti = prompt("Ingrese el numero a multiplicar: ") ;

respuesta.innerText = "Tabla del "+numMulti+"\n"
for (let i = 0; i <= 10; i++) {
    
    respuesta.innerText+= numMulti+" x "+i+" = "+(numMulti * i)+"\n";
    
}

