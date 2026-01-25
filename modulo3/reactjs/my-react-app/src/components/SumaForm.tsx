import { useState } from 'react';

export default function SumaForm() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(Number(a) + Number(b));
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

      <button type="submit">Sumar</button>
    </form>
  );
}
