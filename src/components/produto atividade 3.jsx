import React from "react";
function Produto({ nome, preco, emEstoque }) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>Preço: R$ {preco}</p>
      <p>Status: {emEstoque ? "Disponível" : "Indisponível"}</p>
    </div>
  );
}

export default Produto;
