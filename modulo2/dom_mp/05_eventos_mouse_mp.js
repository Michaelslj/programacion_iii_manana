const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.background = 'yellow';
    caja.textContent = "Vuelo seleccionado";
});
caja.addEventListener('mouseout', () => {
    caja.style.background = 'gray';
    caja.textContent = "Vuelo";
});
caja.addEventListener('click', () => {
    alert('Has seleccionado este vuelo');
});

const areaTouch = document.getElementById('areaTouch');

areaTouch.addEventListener('touchstart', () => {
    caja.style.background = 'blue';
    areaTouch.textContent = "Reservando vuelo...";
});
areaTouch.addEventListener('touchend', () => {
    caja.style.background = 'green';
    areaTouch.textContent = "Área de Reserva";
});
areaTouch.addEventListener('click', () => {
    alert('Has interactuado con el área de reservas');
});
