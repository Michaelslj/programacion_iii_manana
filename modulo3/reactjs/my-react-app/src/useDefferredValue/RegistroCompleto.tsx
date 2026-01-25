import { useState, useDeferredValue } from 'react';

export default function ValidacionRegistro() {
  const [email, setEmail] = useState('');
  const emailDiferido = useDeferredValue(email);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [password, setPassword] = useState('');

  const esValido =
    emailDiferido.includes('@') && emailDiferido.includes('.');

  return (
    <>
      <input
        type="text"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Tu nombre"
      />

      <input
        type="text"
        value={apellido}
        onChange={e => setApellido(e.target.value)}
        placeholder="Tu apellido"
      />

      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Tu correo electrónico"
      />

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Tu contraseña"
      />

      <button
        style={{ color: esValido ? 'lightgreen' : 'salmon' }}
      >
        {emailDiferido === ''? 'Esperando...': esValido ? 'Registro completo': 'Correo inválido'}
      </button>
    </>
  );
}
