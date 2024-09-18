let respuesta = document.getElementById("text")
let num1= number(prompt("Digite un numero: "));
let num2= number(prompt("Digite otro numero: "));

function comparar(num1, num2){
    if(num1 > num2){
        respuesta.innerText=("El numero: "+num1+ " es mayor")
    }else{
        respuesta.innerText=("El numero: "+num2+ " es mayor")
    }
    if(num1 == num2){
        respuesta.innerText=("Los numeros son iguales");
    }

}

comparar(num1,num2);