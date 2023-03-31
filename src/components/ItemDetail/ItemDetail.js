/* import Counter from "../Counter/Counter"
// import { useContext, useState } from "react"
import CartContext from "../CartContext/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ cart, description,  id, name, price, stock }) => {
    const [quantAdded, setquantAdded] = useState(0)
    const { addProdToCart } = useContext(CartContext)

    const handleOnAdd = (quant) => {
        addProdToCart({ id, name, price, quant })
        setquantAdded(quant)
    }

    return (
        <div className="div__IDC" >
            <section>
                <img src={img} alt={name} />
            </section>
            <div className="IDC__info" >
                <h2>{name}</h2>
                <p className="description"> {description}</p>
                <p className="description">${price}</p>

                {quantAdded === 0
                    ? <Counter name={name} stock={stock} id={id} price={price} onAdd={handleOnAdd} />
                    : <Link to="/cart" className="terminarCompra" > Terminar compra </Link>
                }
            </div>
        </div>
    )
}
export default ItemDetail */