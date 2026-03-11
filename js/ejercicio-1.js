
//1. Paso #1: Capturar elementos del DOM
//DOM: Document Object Model
const nombreUsuario = document.getElementById('nombreUsuario');
const btnSaludar = document.getElementById('btnSaludar');
const mensaje = document.getElementById('mensaje');

//2. Paso #2: Creamos la funcion
function registrar() {
    //registrando o capturando el dato desde el DOM
    let nombre = nombreUsuario.value;
    //Mostramos en consola
    console.log('El nombre registrado en cosola es: ' + nombre);

//3. Paso #3: Mostramos el mensaje en el DOM
    mensaje.textContent = '¡Hola, ' + nombreUsuario.value + ', ¡Bienvenido al curso de Programacion!';

}
