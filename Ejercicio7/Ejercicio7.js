let respuesta = document.getElementById("text");
let valores = 0;
let arrayValores = [];
let positivos = 0;
let negativos = 0;
let multiplosQuince = 0; 
let acumPares = 0;

for (let i = 0; i<10; i++) {
 valores = Number(prompt("Ingrese un valor: "));
    arrayValores.push(valores);

 if (valores < 0 ){
    negativos++
 }
 if(valores > 0){
    positivos++
 }
 if(valores%15 == 0){
    multiplosQuince++
 }
 if(valores%2 == 0){
    acumPares+= valores;
 }

}

respuesta.innerText+= "Valores: ["+arrayValores.join(",")+"]"+"\n";
respuesta.innerText+= "Valores positivos: "+positivos+"\n";
respuesta.innerText+= "Valores negativos: "+negativos+"\n";
respuesta.innerText+= "Multiplos de Quince: "+multiplosQuince+"\n";
respuesta.innerText+= "Suma total de pares: "+acumPares+"\n";

