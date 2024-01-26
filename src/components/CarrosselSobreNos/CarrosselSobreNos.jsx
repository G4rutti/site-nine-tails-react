import "./CarrosselSobreNos.css"

import FotoComPremio from '../../assets/images/fotosParaOSite/fotoComPremio.jpg'
import NineERobonaticos from '../../assets/images/fotosParaOSite/nineERobonaticos.jpg'
import TrocandoIdeia from '../../assets/images/fotosParaOSite/trocandoIdeia.jpg'
import Abracos from '../../assets/images/fotosParaOSite/abracos.jpg'

const CarrosselSobreNos = () => {
  return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade alterarTamanho">
            <div className="carousel-inner imagens">
              <div className="carousel-item active ">
                <img src={FotoComPremio} className="d-block " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={NineERobonaticos} className="d-block " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={TrocandoIdeia} className="d-block " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={Abracos} className="d-block " alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
   )
}

export default CarrosselSobreNos