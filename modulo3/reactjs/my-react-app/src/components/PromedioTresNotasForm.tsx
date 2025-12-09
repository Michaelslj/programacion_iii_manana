import { useState } from 'react';

export default function PromedioForm() {
  const [a, setA] = useState('0');
  const [b, setB] = useState('0');
  const [c, setC] = useState('0')

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(Number(a) + Number(b)+ Number(c) / 3
  );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <input
        type="number"
        value={c}
        onChange={(e) => setC(e.target.value)}
      />

      <button type="submit">Calcular</button>
    </form>
  );
}
