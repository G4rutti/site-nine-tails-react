import "./TimeLineRobot.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import TankTails from '../../assets/images/robo/tankTails.jpg';
import TheAnswer from '../../assets/images/robo/theAnswer.jpg';
import Arak from '../../assets/images/robo/arak.jpg';
import Predator from '../../assets/images/robo/predator.JPG';
import Garuttinho from '../../assets/images/robo/garuttinho.JPG';

const TimeLineRobot = () => {
  return (
    <section>
      <div className="container py-5">
        {/* 2025 */}
        <div className="main-timeline-2">
          <h2>2025 - REEFSCAPE</h2>
          <div className="timeline-2 left-2">
            <div className="card wMenor">
              <img src={Arak} className="card-img-top" alt="Robo 2025" />
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Arak</h4>
                <p className="text-muted mb-4"><i className="far fa-clock"></i> 2025</p>
                <p className="mb-0">
                    O Arak mateve sua movimentação por swerve drives. A grande inovação foi a introdução de um controle personalizado, permitindo automação nos níveis de entrega do coral (L1 a L4). O Arak é capaz de entregar um coral no nível L4 durante o modo autônomo, representando um diferencial estratégico. Ele competiu nas regionais de Brasília e São Paulo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2024 */}
        <div className="main-timeline-2">
          <h2>2024 - CresCendo</h2>
          <div className="timeline-2 right-2">
            <div className="card wMenor">
              <img src={Predator}className="card-img-top" alt="Robo 2024 - 2" />
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Predator</h4>
                <p className="text-muted mb-4"><i className="far fa-clock"></i> 2024</p>
                <p className="mb-0">
                Como segundo robô da temporada, o Predator foi desenvolvido para superar os desafios enfrentados pelo Garuttinho. A principal inovação foi a implementação de swerve drives, proporcionando movimentação mais fluida e precisa. Essa melhoria resultou em maior estabilidade e controle durante as partidas. O Predator competiu no Festival SESI de Robótica (OFF-SEASON-MT), demonstrando avanços significativos em desempenho técnico e refinamento de projeto.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-2 left-2 last">
            <div className="card wMenor">
              <img src={Garuttinho} className="card-img-top" alt="Robo 2024 - 1" />
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Garuttinho</h4>
                <p className="text-muted mb-4"><i className="far fa-clock"></i> 2024</p>
                <p className="mb-0">
                    O Garuttinho foi o primeiro robô da temporada 2024, projetado para a Regional do Brasil em Brasília. Utilizando rodas omnidirecionais, semelhantes às do robô The Answer, ele oferecia agilidade e versatilidade no campo. Apesar de seu desempenho satisfatório, foram identificadas limitações em estabilidade e precisão.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2023 */}
        <div className="main-timeline-2">
          <h2>2023 - Charged Up</h2>
          <div className="timeline-2 right-2">
            <div className="card wMenor">
              <img src={TheAnswer} className="card-img-top" alt="Tank Tails" />
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Tank Tails</h4>
                <p className="text-muted mb-4"><i className="far fa-clock"></i> 2023</p>
                <p className="mb-0">
                    Criado para o Festival SESI de Robótica (OFF-SEASON-RJ), o The Answer corrigiu falhas do robô anterior, com foco em velocidade e estabilidade. Possuia um autônomo onde poderia entregar cubo ou cone no High. Ganhou o prêmio de Engineering, esse que celebra a equipe que demonstrou uma abordagem profissional ao processo de design e esse é elegante e vantajoso no campo de jogo.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-2 left-2">
            <div className="card wMenor">
              <img src={TankTails} className="card-img-top" alt="The Answer" />
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">The Answer</h4>
                <p className="text-muted mb-4"><i className="far fa-clock"></i> 2023</p>
                <p className="mb-0">
                    O Tank Tails foi o primeiro robô da Nine Tails, que na temporada <span style={{ color: "#9e19b8" }}>CHARGED UP</span> pontuava cones e cubos em diferentes alturas(Low, Mid e High), e se equilibrava no final do jogo.
                    Participou da Regional do Brasil (Brasília) e do Houston Championship na divisão Curie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineRobot;
