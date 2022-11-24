import React from 'react'

import styles from "./styles.css"

const Header = () => {
  return (
    <div>
        <header class="header">
            <img src="https://hermes.digitalinnovation.one/assets/diome/logo.svg" alt="" />
            <div class="button-container">
                <a class="link" href="">Home</a>
                <button class="button">Entrar</button>
                <button class="button">Cadastrar</button>
            </div>
        </header>
    </div>
  )
}

export default Header