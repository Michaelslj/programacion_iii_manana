const boton = document.getElementById('agregar');

boton.addEventListener('click', () => {
    const texto = document.getElementById('vuelo').value;
    if (texto.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = `Vuelo agregado: ${texto}`;
        document.getElementById('listaVuelos').appendChild(li);
        document.getElementById('vuelo').value = '';
        
        li.addEventListener('click', () => {
            li.remove();
            alert(`Vuelo eliminado: ${texto}`);
        });
    }
});
