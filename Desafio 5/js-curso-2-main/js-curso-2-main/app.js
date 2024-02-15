// Asiga el texto: Hora del Desafío al título
let title = document.querySelector('h1');
let respuestausuario = null;
let numero1 = null;
let numero2 = null;
let suma;

// uso de las variables
title.innerHTML = "Hora del Desafío";

// funciones 
function consoleFunction(){
    alert('Soy un botón y fui clickeado');
}

function promptFunction(){
     respuestausuario = prompt('Menciona una ciudad de Brazil');
     if (respuestausuario != null){
        alert(`Estuve en ${respuestausuario} y me acordé de ti`);
    }
}

function alertFunction(){
    alert("Yo amo JS");
}

function sumaFunction(){
    numero1 = parseInt(prompt('Dime un número'));
    numero2 = parseInt(prompt('Dame otro número'));

    if (numero1 != null || numero2 != null){
        suma = numero1 + numero2;
        alert(`La suma de su número ${numero1} y ${numero2} es ${suma}`);
    }
}

