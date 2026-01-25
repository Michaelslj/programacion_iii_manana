import { useTransition, useState } from 'react';

export default function MiComponente() {
  const [isPending, startTransition] = useTransition();
  const [valor, setValor] = useState("");

  function handleChange(e) {
    const nuevoTexto = e.target.value;
    setValor(nuevoTexto); // urgente
    startTransition(() => {
      // tarea pesada o diferida
    });
  }

  return (
    <>
      <input onChange={handleChange} />
      {isPending && <p>Cargando...</p>}
    </>
  );
}
