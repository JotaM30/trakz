import { useState } from 'react';

function FiltroBusca() {
  const [termobusca, settermobusca] = useState('');

  function setarbusca(event) {
    settermobusca(event.target.value);
  }

  return (
    <>
      <form action="./">
        <input type="text" id="busca" onInput={setarbusca} placeholder="Digite algo" />
      </form>

      <h2>A procurar por: {termobusca}</h2>
    </>
  );
}

export default FiltroBusca;
