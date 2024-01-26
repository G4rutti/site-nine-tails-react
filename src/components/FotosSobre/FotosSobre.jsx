import videoRoboUm from '../../assets/videos/robot/IMG_5163.gif'
import videoRookieAllStar from '../../assets/videos/acoes/rookieAllStar.gif'

import './FotosSobre.css'
import MaquinaDeEscrever from '../MaquinaDeEscrever/MaquinaDeEscrever.jsx'


const FotosSobre = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner imgOpacity FotosSobre">
            <div className="textos">
            <h1>
                    <MaquinaDeEscrever texto='"Não usamos crianças para construir robôs, usamos robôs para construir crianças"' delay={50}/>
                </h1>
                <p>
                    <MaquinaDeEscrever texto='Dean Kamen' delay={500}/>
                </p>
            </div>
            <div class="carousel-item active">
                <img src={videoRoboUm} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={videoRookieAllStar} class="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
  )
}

export default FotosSobre