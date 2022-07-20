import { useContext } from "react"
import CartContext from "../CartContext/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const {  quantAdded } = useContext(CartContext)

    return (
        <>
            <Link to="/cart" >
                <p className="CartWidget">
                    <span>{quantAdded}
                    </span>🛒
                </p>
            </Link>
        </>
    )
}

export default CartWidget