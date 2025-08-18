import React from "react";

function Perfil({ nome, profissao }) {
  return (
    <div className="card-perfil">
      <h2>{nome}</h2>
      <p>{profissao}</p>
    </div>
  );
}

export default Perfil;
