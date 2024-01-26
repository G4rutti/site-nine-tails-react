import React from 'react'
import "./TimeLineRobot.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import TankTails from '../../assets/images/robo/tankTails.jpg'
import TheAnswer from '../../assets/images/robo/theAnswer.jpg'

const TimeLineRobot = () => {
  return (
    <section>
        <div className="container py-5">
            <div className="main-timeline-2">
                <h2>2023 - Charged Up</h2>
                <div className="timeline-2 left-2">
                    <div className="card wMenor">
                        <img src={TankTails} className="card-img-top"
                        alt="Responsive image"/>
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4">Tank Tails</h4>
                            <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i> 2023</p>
                            <p className="mb-0">O Tank Tails foi o primeiro robô da Nine Tails, que na temporada <span style={{color: "#9e19b8"}}>CHARGED UP </span>
                            o objetivo era pontuar cones e cubos em um grid de três níveis, o baixo, médio e alto, junto com o end-game que tinha que se equilibrar na charge-station.
                            O Tank Tails conseguia pontuar nos três níveis e subir na charge-station no fim de jogo. O robô foi utilizado na regional do Brasil, e no Houston Championship,
                            na divisão Curie. <br /><br />
                            O nome "Tank Tails" foi dado por conta do tipo de movimentação do robô, que é estilo Tanque.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline-2 right-2">
                    <div className="card wMenor">
                        <img src={TheAnswer}  className="card-img-top"
                        alt="Responsive image"/>
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4">The Answer</h4>
                            <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i> 2023</p>
                            <p className="mb-0">O "The Answer" foi o robô criado pela Nine Tails para ser utilizado no Festival Internacional SESI de Robótica, torneio esse, que é categorizado como
                            Off-Season, com o foco ainda da <span style={{color: "#9e19b8"}}>CHARGED UP</span>, a equipe foi com objetivo de melhorar alguns aspectos no robô que deixou a desejar na
                            Regional e no Championship, como sua velociade e estabilidade. O "The Answer" foi capaz de suprir este problema, trazendo o prêmio de Engineering, prêmio esse que celebra a equipe que demonstrou uma abordagem profissional ao processo de design e  esse é elegante e vantajoso no campo de jogo.
                            <br /><br /> O nome "The Answer" foi dado por conta dele ser a resposta para todos nossos problemas em relação a engenharia do robô anterior.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-timeline-2">
                <h2>2024 - CresCendo</h2>
                <div className="timeline-2 left-2 last">
                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default TimeLineRobot