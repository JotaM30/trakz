import React from "react";
import Header from "./components/Header";  // Importando o Header.jsx
import MainContent from "./components/MainContent";  // Importando o MainContent.jsx
import "./App.css"; // Importando o CSS global para o App

const App = () => {
  return (
    <div>
      <Header /> 
      <MainContent /> 
    </div>
  );
};

export default App;
