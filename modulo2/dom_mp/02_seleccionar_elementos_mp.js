const titulo = document.getElementById('titulo');
console.log(titulo.textContent);

const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota => console.log(nota.textContent));

const vuelos = document.getElementsByClassName('item');
Array.from(vuelos).forEach(vuelo => console.log(vuelo.textContent));

const usuario = document.getElementsByName('usuario');
Array.from(usuario).forEach(u => console.log(u.textContent));
