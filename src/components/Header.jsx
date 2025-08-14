import React from "react";
import styles from "./Header.module.css"; // Importando o CSS para o Header

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#">Suas Avaliações</a>
        <a href="#">Perfil</a>
        <a href="#">Amigos</a>
        <a href="#">Publicar</a>
        <a href="#">Comunidades</a>
        <a href="/configuracoes">Configurações</a>
      </nav>
    </header>
  );
};

export default Header;
