import { useState } from 'react';

export default function FormularioPentagono() {
  const [perimetro, setPerimetro] = useState<number>(0);
  const [apotema, setApotema] = useState<number>(0);

  const total = (perimetro * apotema) / 2;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`El area del pentagono es ${total}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Perímetro"
        value={perimetro}
        onChange={(e) => setPerimetro(Number(e.target.value))}
      />
      <br />

      <input
        type="number"
        placeholder="Apotema"
        value={apotema}
        onChange={(e) => setApotema(Number(e.target.value))}
      />
      <br />

      <button type="submit">Calcular</button>
    </form>
  );
}
