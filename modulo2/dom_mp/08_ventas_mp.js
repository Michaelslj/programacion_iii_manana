const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorVuelos');
let vuelos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const origen = document.getElementById('origen').value.trim();
  const destino = document.getElementById('destino').value.trim();
  const precio = parseFloat(document.getElementById('precio').value.trim());
  const asientos = parseInt(document.getElementById('asientos').value.trim());

  if (origen && destino && !isNaN(precio) && !isNaN(asientos)) {
    const nuevoVuelo = { id: Date.now(), origen, destino, precio, asientos };
    vuelos.push(nuevoVuelo);
    renderizarVuelo(nuevoVuelo);
    formulario.reset();
  }
});

function renderizarVuelo({ id, origen, destino, precio, asientos }) {
  const div = document.createElement('div');
  div.className = 'vuelo';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${origen} → ${destino}</h3>
    <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
    <p>Asientos disponibles: ${asientos}</p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.vuelo');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    vuelos = vuelos.filter(v => v.id !== id);
    tarjeta.remove();
  }
});
