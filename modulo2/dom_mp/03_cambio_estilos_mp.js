const mensaje = document.getElementById('mensaje');
mensaje.textContent = "Vuelos disponibles en FlyFast";
mensaje.style.color = "red";
mensaje.style.fontWeight = "bold";

const link = document.getElementById('link');
link.setAttribute('href', 'https://www.flyfast.com/reservas');
link.classList.add('boton');

const boton = document.getElementById('cambiarEstilo');
boton.addEventListener('click', () => {
    mensaje.style.color = mensaje.style.color === 'red' ? 'blue' : 'red';
    link.style.backgroundColor = link.style.backgroundColor === 'blue' ? 'green' : 'blue';
});
