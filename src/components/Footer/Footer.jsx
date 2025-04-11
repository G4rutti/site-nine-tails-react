import "./Footer.css"

const BottomContent = () => {
  return (
    <footer>
        <section className="faleConosco type">
            <h2 className="title">Fale Conosco</h2>
            <ul className="socialMedia">
                <div className="ladoUm">
                    <li id="tiktok"><a href="https://www.tiktok.com/@ninetailsfrc" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a></li>
                    <li id="twitter"><a href="https://twitter.com/ninetails9219" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                </div>
                <div className="ladoDois">
                    <li id="youtube"><a href="https://www.youtube.com/@ninetails9219" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube" ></i></a></li>
                    <li id="instagram"><a href="https://www.instagram.com/ninetails9219/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" ></i></a></li>
                </div>
            </ul>
        </section>
        <section className="contatos">
            <div className="tiposDeContatos">
                <div className="type localizacao">
                    <h3 className="title">Localização</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.046708282741!2d-44.456216702841196!3d-22.4648790027505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e7f88470fd177%3A0xa87d493f4d62eb20!2sFirjan%20SENAI!5e0!3m2!1spt-BR!2sbr!4v1704390150281!5m2!1spt-BR!2sbr"></iframe>
                </div>
                <div className="contacts">
                    <div className="type">
                        <h3 className="title">Contato</h3>
                        <ul>
                            <li><a href="mailto:ninetails9219@gmail.com">ninetails9219@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="type">
                        <h3 className="title">Horário</h3>
                        <p>Segunda a Sábado das 08:00 às 17:00</p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    
  )
}

export default BottomContent