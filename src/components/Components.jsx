import { useState } from 'react';
 
function ModoNoturno() {
  const [modoNoturno, setModoNoturno] = useState(false);
 
  return (
    <div className={modoNoturno ? 'dark' : 'light'}> 
      <h1>Título</h1>
      <p>Conteúdo...</p>
      <button onClick={() => setModoNoturno(!modoNoturno)}>Alternar Modo</button>
    </div>
  );
}

export default ModoNoturno;
