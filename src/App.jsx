import React from "react";
import Contador from "./components/Components";
import ModoNoturno from "./components/Components";
import './components/CS.css'
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Meu App React</h1>
      <Contador />
      <ModoNoturno/>    </div>
  );
}

export default App;