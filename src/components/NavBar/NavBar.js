import "../../sassCarpeta/index.scss"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { useState } from "react"
const NavBar = () => {

    const [menuHamb, setMenuHamb] = useState(false)
    const fnMenuHamburguesa = () => {
        setMenuHamb(!menuHamb)
        console.log(menuHamb);
    }

    return (
        <>
            <nav className={`nav ${menuHamb ? 'activeNav' : ''}`} >
                <Link to="/" >
                    <h3 className="nav__marca" >Marca</h3>
                </Link>
                <ul>
                    <Link to="/category/celular"> celulares</Link>
                    <Link to="/category/notebooks"> notebooks</Link>
                    <Link to="/category/tablet"> tablet</Link>
                </ul>
                <CartWidget />
                <Link to="/form" >
                    <h3 className="nav__marca" >👥</h3>
                </Link>

            </nav>
            <button onClick={fnMenuHamburguesa} >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </>
    )
}
export default NavBar