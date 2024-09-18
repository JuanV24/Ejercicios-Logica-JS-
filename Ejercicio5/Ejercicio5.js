let respuesta = document.getElementById("text");
let carro = prompt("Escriba el nombre del carro a comprar: ");
let nombreCarro = carro.toUpperCase();
let precio = prompt("Digite el precio del carro: ")
let descuento;
let preciotot;

function evaluarCarro(carro, precio) {
    switch (carro) {
        case "FORD FIESTA":
            descuento = precio * 0.05;
            preciotot = precio - descuento;
            respuesta.innerText = "Su el carro seleccionado es un: " + carro + "\n";
            respuesta.innerText += "El descuento aplicado es del 5%, lo que es igual a: " + descuento + "\n";
            respuesta.innerText += "El precio total a pagar es de: $" + preciotot;

            break;
        case "FORD FOCUS":
            descuento = precio * 0.10;
            preciotot = precio - descuento;
            respuesta.innerText = "Su el carro seleccionado es un: " + carro + "\n";
            respuesta.innerText += "El descuento aplicado es del 10%, lo que es igual a: " + descuento + "\n";
            respuesta.innerText += "El precio total a pagar es de: $" + preciotot;
            break;
        case "FORD ESCAPE":
            descuento = precio * 0.20;
            preciotot = precio - descuento;
            respuesta.innerText = "Su el carro seleccionado es un: " + carro + "\n";
            respuesta.innerText += "El descuento aplicado es del 20%, lo que es igual a: " + descuento + "\n";
            respuesta.innerText += "El precio total a pagar es de: $" + preciotot;
            break;
        default:
            respuesta.innerText=("Modelo no encontrado")
            break;
    }
}

evaluarCarro(nombreCarro, precio);