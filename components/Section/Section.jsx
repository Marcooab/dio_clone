import React from 'react'
import styles from "./styles.css"
const Section = () => {
  return (
    <section class="section-container">
        <article class="sentence">
            <h2>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h2>
        </article>
        <article class="input-container">
       
            <h2>Comece agora grátis</h2>
            <p>Crie sua conta e make the change._</p>
            
            <input class="input" type="text" placeholder='Nome Completo' /><hr/>
            <input class="input" type="email" placeholder='Email' /><hr/>
            <input class="input" type="password" placeholder='Password' /><hr/>
            <button class="criar"><a href="#">Criar minha conta</a></button>
            <p class="conta_criar">Ao clicar em "criar minha conta grátis,<br /> declaro que aceito as Políticas de <br /> Privacidade e os Termos de Uso da DIO.</p>
            <p class="conta">Já tenho conta. <a href="#">Fazer Login</a></p>
        </article>
    </section>
  )
}

export default Section