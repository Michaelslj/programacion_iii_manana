try {
    console.log(reservaNoExistente);
} catch (error) {
    console.log("Mensaje de error:", error.message);
}

try {
    console.log("Intentando procesar reserva de vuelo...");
    throw new Error("Vuelo no encontrado");
} catch (error) {
    console.log("Mensaje de error:", error.message);
} finally {
    console.log("Finalizando intento de procesar reserva");
}
