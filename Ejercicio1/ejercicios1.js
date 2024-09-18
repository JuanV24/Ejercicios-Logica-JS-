const respuesta = document.getElementById("text") 
let edad; 
edad = prompt("Ingrese su edad: ");


function verificadorEdad(edad){
    edad < 18 ? respuesta.innerText="Usted es menor de edad": respuesta.innerText="Usted es mayor de edad";

    //Este if no lo pide pero lo puse por logica 
    if (edad <= 0) {
        respuesta.innerText="Ingrese una edad valida";
        
    }
    
}
    
    verificadorEdad(edad)
//lert(verificadorEdad(edad))
