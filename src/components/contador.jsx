import React, { useState } from "react";

function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <button onClick={() => setContagem(contagem - 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{contagem}</span>
      <button onClick={() => setContagem(contagem + 1)}>+</button>
    </div>
  );
}

export default Contador;