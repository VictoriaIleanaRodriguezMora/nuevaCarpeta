import "../../sassCarpeta/index.scss"

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://twitter.com/VirmCode" > <i className="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/victoriarodriguezmora" ><i
                        className="fab fa-linkedin"></i></a>
                </li>
                <li><a href="https://www.instagram.com/virmcode/?hl=es" ><i className="fab fa-instagram"></i></a>
                </li>
                <li><a href="https://wa.me//5491133990583?text=Hola%20Victoria%20" ><i
                    className="fab fa-whatsapp"></i></a></li>
            </ul>
            <p>
                <a href="https://victoriarodriguez-portfolio.netlify.app/" > <i className="far fa-copyright"></i> Victoria Ileana Rodriguez Mora 2022 </a>
            </p>
        </footer>
    )
}

export default Footer