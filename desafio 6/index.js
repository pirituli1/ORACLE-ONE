// Desafio 1 Crear una función que muestre "¡Hola, mundo!" en la consola.
function mensajeSaludo() {
    let mensaje = "¡Hola, mundo!";
    console.log(mensaje);
}
document.getElementById('d1').addEventListener('click', mensajeSaludo);

// Desafio 2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoPersonalizado(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
// Definir la función que se ejecutará al hacer clic en el botón
function ejecutarSaludoPersonalizado() {
    // Pedir al usuario que ingrese su nombre
    let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
    // Llamar a la función con el nombre proporcionado por el usuario
    saludoPersonalizado(nombreUsuario);
}
document.getElementById('d2').addEventListener('click', ejecutarSaludoPersonalizado);

// Desafio 3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumber(numero){
    numero = parseFloat(numero);
    let numeroDoble = numero * 2;
    console.log("El numero que me diste fue: " + numero + "  \nEl doble del mismo es: " + numeroDoble);
}
function ejecutarPedirNumero(){
    let numeroUsuario = prompt("Ingrese un número, le daré el doble:");
    dobleNumber(numeroUsuario);
}
document.getElementById("d3").addEventListener("click",ejecutarPedirNumero);

// Desafio 4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioTresNumeros(numero1, numero2, numero3) {
    let promedio = (numero1 + numero2 + numero3) / 3; // Corregido el cálculo del promedio
    console.log("Tus números son: " + numero1 + ", " + numero2 + ", " + numero3 + "\nEl promedio de estos números es: " + promedio);
}
function pedirNumerosPromedio(){
    let numero = 1;
    let numerosIngresados = [];

    // Mientras el usuario no haya ingresado tres números, seguir pidiendo números
    while (numero <= 3) {
        let numeroUsuario = parseFloat(prompt("Ingrese el número " + numero + ":"));
        numerosIngresados.push(numeroUsuario); // Almacenar el número ingresado en el array con .push agrega al array
        numero++;
    }

    // Llamar a la función promedioTresNumeros con los números ingresados por el usuario
    promedioTresNumeros(numerosIngresados[0], numerosIngresados[1], numerosIngresados[2]);
}
document.getElementById("d4").addEventListener("click",pedirNumerosPromedio);

// Desafio 5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function determinarNumerosUsuario(){
    contadorUsuario = prompt("Cuantos números me darás? \n Recomendación:2");
    contadorScript = 1
    numerosIngresados = [];
    
    while (contadorScript <= contadorUsuario)
    {
        let numeroArray = parseFloat(prompt("Ingresa el número " + contadorScript + ":"))
        numerosIngresados.push(numeroArray);
        contadorScript++;
    }

    let mayor = numerosIngresados[0];

    for (let i = 1; i < numerosIngresados.length;i++){
        if (numerosIngresados[i] > mayor){
            mayor = numerosIngresados[i];
        }

    console.log("El numero mayor es: " + mayor);
    }
}
document.getElementById("d5").addEventListener("click",determinarNumerosUsuario);

//  Desafio 6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicarNumeroUsuario(){
    numero = prompt("Ingresa porfavor un número: ");
    numeroMult = numero * numero;
    console.log(`La multiplicación de su número ${numero} por si mismo es: ${numeroMult}`);

}
document.getElementById("d6").addEventListener("click",multiplicarNumeroUsuario);