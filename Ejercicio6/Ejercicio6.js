let respuesta = document.getElementById("text")
let ciudad = prompt("Ingrese la ciudad de origen: ");
let ciudadOrigen = ciudad.toUpperCase();
let destino = prompt("Ingrese su destino: ");
let destinoOrigen = destino.toUpperCase();
let precio = prompt("Ingrese el precio a cancelar: ");
let descuento;
let descuentotot;

function descuentoViaje(ciudadOrigen, destinoOrigen, precio){
if(ciudadOrigen == "LA PALMA" || ciudadOrigen == "CIUDAD DE PALMA" || ciudadOrigen == "CIUDAD DE LA PALMA" && destinoOrigen == "LA COSTA DEL SOL"){
     descuento = precio * 0.05;
     descuentotot = precio - descuento;

     respuesta.innerText = "Tu ciudad de origen es: "+ciudadOrigen+"\n"+"Con destino a: "+ destinoOrigen+"\n";
     respuesta.innerText += "Usted recibio un descuento del 5% en su viaje"+"\n";
     respuesta.innerText += "Su total a pagar es de : $"+descuentotot;
}

if (destinoOrigen== "PANCHIMALCO"){
    descuento = precio * 0.10;
     descuentotot = precio - descuento;

     respuesta.innerText = "Tu ciudad de origen es: "+ciudadOrigen+"\n"+"Con destino a: "+ destinoOrigen+"\n";
     respuesta.innerText += "Usted recibio un descuento del 10% en su viaje"+"\n";
     respuesta.innerText += "Su total a pagar es de : $"+descuentotot;
}
if (destinoOrigen== "PUERTO EL TRIUNFO"){
    descuento = precio * 0.15;
     descuentotot = precio - descuento;

     respuesta.innerText = "Tu ciudad de origen es: "+ciudadOrigen+"\n"+"Con destino a: "+ destinoOrigen+"\n";
     respuesta.innerText += "Usted recibio un descuento del 15% en su viaje"+"\n";
     respuesta.innerText += "Su total a pagar es de : $"+descuentotot;
} else{
    respuesta.innerText = "SU DESTINO NO ESTA DISPONIBLE";
    
}

}
descuentoViaje(ciudadOrigen, destinoOrigen, precio);

