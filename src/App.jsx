

  
  import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Saudacao from './components/Saudacao';
import Rodape from './components/Rodape';
import Alerta from './components/Alerta'; 
import EmailInput from './components/Emailinput';
import PasswordInput from './components/Passwordinput';
import LoginButton from './components/LoginButton';
function App() {
  return (
    <>
      <h1>Trakz</h1>
      <Saudacao />
      <Rodape />
      <Alerta />
    <EmailInput/>
    <PasswordInput/>
    <LoginButton/>
    </>
  );
}

export default App;
