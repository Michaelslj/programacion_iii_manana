import { useId } from 'react';

export default function MiComponente() {
  const id = useId();
  return <div id={id}>Elemento único</div>;
}
