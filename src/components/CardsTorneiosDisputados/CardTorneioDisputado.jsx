import "./CardTorneioDisputado.css"

const CardTorneioDisputado = ({imagem, titulo, texto}) => {
  return (
    <div>
        <div class="card carta">
            <img src={imagem} class="card-img-top" alt={titulo}/>
            <div class="card-body">
                <h5 class="card-title">{titulo}</h5>
                <p class="card-text">{texto}</p>
            </div>
        </div>
    </div>
  )
}

export default CardTorneioDisputado