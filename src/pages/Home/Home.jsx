import { lazy, Suspense } from 'react'

// Fotos:
// const FotoRookieInspiration = lazy(() => import('../../assets/images/fotoEquipe/2023/rookieInspiration.jpg'))
import FotoRookieInspiration from "../../assets/images/fotoEquipe/2023/rookieInspiration.jpg"

// Components:
const FotoEquipe = lazy(() => import("../../components/FotoEquipe/FotoEquipe.jsx"))
const DivisaoDeSecao = lazy(() => import('../../components/DivisaoDeSecao/DivisaoDeSecao.jsx'))
const Banner = lazy(() => import('../../components/Banner/Banner.jsx'))
const CardWithImageCap = lazy(() => import('../../components/CardWithImageCap/CardWithImageCap.jsx'))

import  styles  from'./Home.module.css'

const Home = () => {
  
  return (
    <Suspense fallback={<div>Carregando...</div>}>
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
          <Suspense fallback={<div>Carregando...</div>}>
            <CardWithImageCap/>
          </Suspense>
        </div>
      </main>    
    </Suspense>
  )
}

export default Home