import React from "react";
import "./App.css";

function Perfil(props) {
  return (
    <div className="card-perfil">
      <h2>{props.nome}</h2>
      <p>{props.profissao}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Perfil nome="João" profissao="Desenvolvedor" />
    </div>
  );
};

export default App;

