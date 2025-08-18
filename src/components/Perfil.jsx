

function Perfil(props) {
  return (
    <div className="card-perfil">
      <h2>{props.nome}</h2>
      <p>{props.profissao}</p>
    </div>
  );
}

export default Perfil;
