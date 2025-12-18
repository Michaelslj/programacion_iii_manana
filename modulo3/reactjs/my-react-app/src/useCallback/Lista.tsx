
import { useCallback } from 'react';

interface ListaProps {
  items: number[];
}

export default function Lista({ items }: ListaProps) {
  const handleClick = useCallback((item: number) => {
    const resultado = item * 2;
    console.log(`El resultado de multiplicar ${item} por 2 es: ${resultado}`);
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          <button onClick={() => handleClick(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
}
