//1. Paso #1: Declar una Array con 6 lenguaje de programacion
const lenguajes = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'PHP'];

//2. Paso #2: Capturamos el elemento del DOM
const listaLenguajes = document.getElementById('listaLenguajes');

let elementos = '';
//3. Paso #3: Usamos el bucle FOR para recorrer la Array
for (let i = 0; i < lenguajes.length; i++) {
    if (lenguajes[i] === 'JavaScript') {
        alert('¡JavaScript sirve para el Frontend!');
    }
    //4. Paso #4: Acumulamos cada lenguaje dentro de las etiquetas <li>
    elementos += '<li>' + lenguajes[i] + '</li>';
}
listaLenguajes.innerHTML = elementos;

