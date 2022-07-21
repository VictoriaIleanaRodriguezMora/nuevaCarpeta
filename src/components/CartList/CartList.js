import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import CartContext from "../CartContext/CartContext"
import { useContext } from "react"

const CartList = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            <section className="CartItem__section">
                <div className="CartItem__div">
                    <ul className="CartItem__categorias">
                        <li>Producto</li>
                        <li>Cantidad</li>
                        <li>Precio</li>
                        <li>Subtotal</li>
                        <li>Remover Item</li>
                    </ul>
                    {cart.map(cart =>
                        <CartItem key={cart.id}{...cart} />)}
                </div>
                <Link to="/form" className="generarOrden">Generar orden</Link>
            </section>
        </>
    )
}
export default CartList