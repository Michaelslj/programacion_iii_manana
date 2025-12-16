
import { useRef } from 'react';

export default function CirculoColorido() {
  const circuloRef = useRef(null);

  const cambiarColor = () => {
    const colores = ['green', 'red', 'yellow', 'purple', 'brown'];
    const color = colores[Math.floor(Math.random() * colores.length)];
    circuloRef.current.style.backgroundColor = color;
  };

  return (
    <>
      <div
        ref={circuloRef}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '0%',
          backgroundColor: 'gray',
          marginBottom: '1rem',
          transition: 'background-color 0.5s'
        }}
      />
      <button onClick={cambiarColor}>Cambiar color del círculo</button>
    </>
  );
}
