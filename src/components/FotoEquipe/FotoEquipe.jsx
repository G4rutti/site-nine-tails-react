import imagemUm from '../../assets/images/fotoEquipe/2023/013a0dfa-ef31-40e7-8c22-b5fab14ddc93.jpg'
import imagemDois from '../../assets/images/fotoEquipe/2023/IMG_6945.jpg'
import imagemTres from '../../assets/images/fotoEquipe/2023/IMG_6947.jpg'

import './FotoEquipe.css'
import { NavLink } from 'react-router-dom'


const FotoEquipe = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="texto">
                <h1>Apresentamos a <br/> Nine Tails #9219</h1>
                <NavLink to="/sobre"><p role="button" className="button-name">Sobre Nós</p></NavLink>
            </div>
            <div className="carousel-item active fotosComAEquipe">
                <img src={imagemUm} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item fotosComAEquipe">
                <img src={imagemDois} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item fotosComAEquipe">
                <img src={imagemTres} className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
  )
}

export default FotoEquipe
