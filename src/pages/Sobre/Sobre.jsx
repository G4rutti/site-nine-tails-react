import styles from './Sobre.module.css'

import DivisaoDeSecao from '../../components/DivisaoDeSecao/DivisaoDeSecao.jsx'
import FotosSobre from '../../components/FotosSobre/FotosSobre.jsx'
import CarrosselSobreNos from '../../components/CarrosselSobreNos/CarrosselSobreNos.jsx'
import CardTorneioDisputado from '../../components/CardsTorneiosDisputados/CardTorneioDisputado.jsx'

import Brasilia2023 from "../../assets/images/imagensTorneiosDisputados/2023BrazilRegional.jpg"
import Houston2023 from "../../assets/images/imagensTorneiosDisputados/2023HoustonCurie.jpg"

const Sobre = () => {
  return (
    <div className={styles.conteudoPirncipal}>
        <FotosSobre/>
        <DivisaoDeSecao frase="Sobre nós"/> 
        <div className={styles.carrossel}>
          <CarrosselSobreNos />
          <div className={styles.texto}>
            <p>A equipe Nine Tails iniciou sua jornada na FIRST no ano de 2022, com entrada direta no FRC. 
            Em 2023 nossa equipe com apenas 3 meses de time, participou da sua primeira regional em Brasília, 
            onde competindo com outras 27 equipes rookies, de destacou e teve a honra de ganhar o Rookie All Star, 
            assim tendo a oportunidade de competir no maior torneio de robótica do mundo, que aconteceu em Houston no Texas. 
            E com muito esforço e dedicação recebemos o Rookie Inspiration, assim  servindo como inspiração para outras equipes 
            rookies de todo o mundo. E logo após o mundial, nosso time foi convidado a participar também do Off Season, 
            que aconteceu no Rio de Janeiro, onde fomos premiados com o Engineering Award, que prestigia a melhor engenharia do robô da competição. 
            Assim, com muito trabalho, esforço e dedicação, nosso time leva a STEAM para toda nossa comunidade, construindo sonhos por meio da engenharia e robótica, 
            transformando vidas por meio da FIRST.
            </p>
          </div>
        </div>
        <DivisaoDeSecao frase="Torneios disputados"/>
        <div className={styles.torneiosDisputados}>
          <CardTorneioDisputado imagem={Brasilia2023} titulo="Regional do Brasil 2023" 
          texto="A Regional do Brasil aconteceu entre os dias 15 a 18 de março, na semana 3 da temporada Charged Up, a Equipe foi para o torneio com o robô 'Tank Tails'
          e ficou entre os 10 melhores robôs do torneio, e também ganhou o prêmio 'Rookie All-Star'. Prêmio esse que deu a vaga para a Nine Tails ir para o mundial!"/>
          <CardTorneioDisputado imagem={Houston2023} titulo="Houston championship - Curie division 2023" 
          texto="O Houston Championship ocorreu entre os dias 20 e 23 de abril, e a Nine Tails foi colocada na divisão 'Curie', uma entre as 8 divisões no Houston Championship.
          A equipe nesse torneio, trouxe junto com eles ao Brasil o prêmio 'Rookie Inspiration', para finalizar a temporada Charged Up com sucesso!"/>
        </div>
    </div>
  )
}

export default Sobre