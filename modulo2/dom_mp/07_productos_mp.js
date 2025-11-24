const vuelos = [
    { origen: "Quito", destino: "Guayaquil", precio: 150, asientos: 12, estado: "Disponible" },
    { origen: "Quito", destino: "Cuenca", precio: 120, asientos: 8, estado: "Disponible" },
    { origen: "Guayaquil", destino: "Quito", precio: 150, asientos: 5, estado: "Disponible" },
    { origen: "Cuenca", destino: "Guayaquil", precio: 130, asientos: 0, estado: "Completo" },
    { origen: "Guayaquil", destino: "Cuenca", precio: 125, asientos: 3, estado: "Disponible" },
    { origen: "Quito", destino: "Loja", precio: 180, asientos: 10, estado: "Disponible" },
    { origen: "Loja", destino: "Quito", precio: 180, asientos: 2, estado: "Disponible" },
    { origen: "Guayaquil", destino: "Loja", precio: 160, asientos: 0, estado: "Completo" },
    { origen: "Loja", destino: "Guayaquil", precio: 160, asientos: 4, estado: "Disponible" },
    { origen: "Quito", destino: "Manta", precio: 200, asientos: 6, estado: "Disponible" }
];

const tabla = document.getElementById('cuerpoTabla');
vuelos.forEach(vuelo => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${vuelo.origen}</td>
        <td>${vuelo.destino}</td>
        <td>$${vuelo.precio.toFixed(2)}</td>
        <td>${vuelo.asientos}</td>
        <td>${vuelo.estado}</td>
    `;
    tabla.appendChild(fila);
});
