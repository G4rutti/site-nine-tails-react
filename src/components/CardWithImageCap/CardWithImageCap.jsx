
import mkt from '../../assets/images/fotoEquipe/2024/mkt.webp'
import mecanica from '../../assets/images/fotoEquipe/2024/mecanica.webp'
import eletrica from '../../assets/images/fotoEquipe/2024/eletrica.webp'
import programacao from '../../assets/images/fotoEquipe/2024/programacao.webp'


const CardWithImageCap = () => {
  return (
        <div className="card-group" style={{width: '80vw'}}>
            <div className="card" loading="eager">
                <img src={mecanica} className="card-img-top"  alt="..."  />
                <div className="card-body">
                    <h5 className="card-title">Mecânica</h5>
                    <p className="card-text">Os responsáveis pela mecânica produzem o chassi e o corpo do robô. Os integrantes são os alunos: Pedro Eduardo, Alice, Carlos Eduardo e Enzzo.</p>
                </div>
            </div>
            <div className="card" loading="eager">
                <img src={eletrica}className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Elétrica</h5>
                    <p className="card-text">A parte elétrica da equipe é feita pelos integrantes: Pedro Siqueira e Victor Duque. A subequipe realiza as ligações elétricas do robô permitindo o seu funcionamento.</p>
                </div>
            </div>
            <div className="card" loading="eager">
                <img src={mkt} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Social Marketing</h5>
                    <p className="card-text">A subequipe do social é composta pelos integrantes: Rebeca, Maria Eduarda, Maria Lucia e Thiago. Essa área é responsável pelas ações voluntárias que a equipe realiza ao longo do ano e o marketing que a promove.</p>
                </div>
            </div>
            <div className="card" loading="eager">
                <img src={programacao}className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Programação</h5>
                    <p className="card-text">A programação é responsável pelo controle dos sistemas de movimentação do robô, unindo o trabalho feito pelas equipes de elétrica e mecânica. Este trabalho é realizado pelos integrantes: Vinícius Vilarinho e Arthur Novaes.</p>
                </div>
            </div>
        </div>
  )
}

export default CardWithImageCap