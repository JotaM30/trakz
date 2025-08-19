import { useState } from 'react';

function FormularioContato() {
  const [nome, setNome] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <form action="">
      <input type="text" id="nome" onInput={e => setNome(e.target.value)} placeholder="Seu nome" />
      <input type="text" id="mensagem" onInput={e => setMsg(e.target.value)} placeholder="Sua mensagem" />
      <button type="submit">Enviar</button>
      <p>{nome}</p>
      <p>{msg}</p>
    </form>
  );
}

export default FormularioContato;
