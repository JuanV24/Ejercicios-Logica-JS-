let respuesta = document.getElementById("text");
let nombre = prompt("Ingrese su nombre completo: ");
let salario = prompt("Ingrese su salario: ");
let categoria = prompt("Ingrese su categoria: ");
let categoriaMayuscula = categoria.toUpperCase() 
let salariotot;
let aumento;

switch (categoriaMayuscula) {
    case "A":
        
        aumento = (salario * 0.15);
        //Lo hago de esta forma ya que he visto que JS presenta problemas al sumar variables 
        salariotot = (salario * 0.15) + salario;

        respuesta.innerText = ("Nombre: " + nombre+"\n");
        respuesta.innerText += ("Categoria: " + categoriaMayuscula)+"\n";
        respuesta.innerText += ("Salario base: " + salario)+"\n";
        respuesta.innerText += ("Su aumneto es del 15% que es igual a: " + aumento+"\n");
        respuesta.innerText += ("Su salario total es de: " + salariotot);

        break;

    case "B":
        aumento = (salario * 0.30);
        salariotot = (salario * 0.30) + salario;

        respuesta.innerText = ("Nombre: " + nombre+"\n");
        respuesta.innerText += ("Categoria: " + categoriaMayuscula+"\n");
        respuesta.innerText += ("Salario base: " + salario+"\n");
        respuesta.innerText += ("Su aumneto es del 30% que es igual a: " + aumento+"\n");
        respuesta.innerText += ("Su salario total es de: " + salariotot);

        break;
    case "C":
        aumento = (salario * 0.10);
        salariotot = (salario * 0.10) + salario;

        respuesta.innerText = ("Nombre: " + nombre+"\n");
        respuesta.innerText += ("Categoria: " + categoriaMayuscula+"\n");
        respuesta.innerText += ("Salario base: " + salario+"\n");
        respuesta.innerText += ("Su aumneto es del 10% que es igual a: " + aumento+"\n");
        respuesta.innerText += ("Su salario total es de: " + salariotot);

        break;
    case "D":
        aumento = (salario * 0.20);
        salariotot = (salario * 0.20) + salario;

        respuesta.innerText = ("Nombre: " + nombre+"\n");
        respuesta.innerText += ("Categoria: " + categoriaMayuscula+"\n");
        respuesta.innerText += ("Salario base: " + salario+"\n");
        respuesta.innerText += ("Su aumneto es del 20% que es igual a: " + aumento+"\n");
        respuesta.innerText += ("Su salario total es de: " + salariotot+"\n");

        break;

    default:
        respuesta.innerText=("Categoria incorrecta")
        break;
}