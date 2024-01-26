import React from 'react'

// Fotos:
import FotoRookieInspiration from "../../assets/images/fotoEquipe/2023/rookieInspiration.jpg"

// Components:
import FotoEquipe from "../../components/FotoEquipe/FotoEquipe.jsx"
import DivisaoDeSecao from '../../components/DivisaoDeSecao/DivisaoDeSecao.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import CardWithImageCap from '../../components/CardWithImageCap/CardWithImageCap.jsx'

import  styles  from'./Home.module.css'

const Home = () => {
  return (
    <>
      <main className={styles.conteudoPrincipal}>
        <FotoEquipe/>
        <DivisaoDeSecao frase="Nossa Origem"/>
        <div className={styles.origem}>
          <div className={styles.cima}>
            <div className={styles.esquerda}>
              <img src={FotoRookieInspiration} className={styles.imagemRI} alt="Nine Tails após ganhar o rookie Inspiration" />
            </div>
            <div className={styles.direita}>
              <p>Somos a equipe 9219 Nine Tails, uma equipe da FIRST Robotics Competition (FRC) da escola FIRJAN SESI/SENAI Resende, no Rio de Janeiro.
              Desde a idealização, e a criação da equipe, o time cresceu em todos os quesitos, e se mantém como um dos destaques na comepetição e na nossa comunidade.
              Na temporada Crescendo, estamos autualmente com cerca de doze alunos que trabalham na equipe, quatro mentores e seis alumnis para dar continuidade no legado da equipe.
              E estamos orgulhosos por ter tido sucesso em todos os torneios que disputamos até então, tendo ido ao primeiro CHAMPIONSHIP e obter o prêmio Rookie Inspiration.
              Fora da competição, nos orgulhamos do envolvimento em nossa comunidade. Organizamos Workshops de LEGO em escolas públicas da nossa cidade e projetos que desenvolvem a cultura STEAM. 
              </p>
              <div className={styles.baixo}>
                <Banner/>
              </div>
            </div>
          </div>
        </div>
        <DivisaoDeSecao frase="Áreas de atuação"/>
        <div className={styles.sessaoCardsWithImageCap}>
          <CardWithImageCap/>
        </div>
      </main>    
    </>
  )
}

export default Home