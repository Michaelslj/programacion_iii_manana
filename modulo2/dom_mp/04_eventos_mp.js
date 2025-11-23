let vueloElemento = null;

document.getElementById('crear').addEventListener('click', () => {
    vueloElemento = document.createElement('p');
    vueloElemento.textContent = "Vuelo agregado: Quito - Guayaquil, Precio: $150";
    document.getElementById('contenedor').appendChild(vueloElemento);
});

document.getElementById('eliminar').addEventListener('click', () => {
    if (vueloElemento) vueloElemento.remove();
});
