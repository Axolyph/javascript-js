//1. Intentamos recuperar el conteo previo guardado en el navegador
let contador = localStorage.getItem("contador");

//2. Usamos un condicional ternario (un if/else resumido)
//Si 'contador' tiene datos, lo convertimos a número con (parseInt).
//Si esta vacio, inicia en 0
contador = contador ? parseInt(contador) : 0;

//3. Capturamos el elemento usando su ID
//Usamos 'cons' porque la 'caja' HTML no va a cambiar, solo su contenido.
const conteo = document.getElementById("contador");

//4. Mostramos el valor inicial en la pantalla
conteo.textContent = contador;

//5. Esta funcion recibe un "valor" (+1 o -1) y actualiza el contador
function actualizarContador(valor) {
    //Sumamos o restamos el valor al contador
    contador += valor;

    //Guardamos el nuevo valor en la memoria del navegador (localStorage)
    localStorage.setItem("contador", contador);

    //Actualizamos el número mostrado en la pantalla
    conteo.textContent = contador;
}

//6. Funcion para el boton REDUCIR
function reducir() {
    actualizarContador(-1);
}

//7. Funcion para el boton RESET
function reset() {
    contador = 0; //Devolvemos la variable a 0
    localStorage.setItem("contador", contador); //Sobrescribimos la memoria
    conteo.textContent = contador; //Actualizamos la pantalla
}

//8. Funcion para el boton AUMENTAR
function aumentar() {
    actualizarContador(1);
}

console.log("Contador inicial:", contador);