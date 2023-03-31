import { Link } from "react-router-dom"
import "../../sassCarpeta/index.scss"
import { useState, useContext } from "react"
import Counter from "../Counter/Counter"
import CartContext from "../CartContext/CartContext"

const Item = ({ cart, id, name, price, img, stock = 0, initial = 1 }) => {
    // const { quantAdded } = useContext(CartContext)
    const [quantAdded, setquantAdded] = useState(0)
    // const { addProdToCart } = useContext(CartContext)
    const [quant, setQuant] = useState(initial)
    const { setCart } = useContext(CartContext)

    const increment = () => {
        if (quant < stock) {
            setQuant(quant + 1)
        }
    }

    const decrement = () => {
        if (quant > 1) {
            setQuant(quant - 1)
        }
    }
    const handleOnAdd = (quant) => {
        addProdToCart({ id, name, price, quant })
        setquantAdded(quant)
    }
    const addProdToCart = (productToAdd) => {
        if (!cart.some(prod => prod.id === productToAdd.id)) {
            setCart([...cart, productToAdd])
        }
    }
    return (
        <>
            <li>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <p>${price}</p>
                {/* <Link to={`/detail/${id}`} > Ver detalle </Link> */}
                {quantAdded === 0
                    ? <Counter name={name} stock={stock} id={id} price={price} onAdd={handleOnAdd} />
                    : <Link to="/cart" className="terminarCompra" > Terminar compra </Link>
                }
            </li>


        </>
    )
}
export default Item