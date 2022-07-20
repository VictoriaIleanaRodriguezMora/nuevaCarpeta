import { useContext } from "react"
import CartContext from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import "../../sassCarpeta/index.scss"

export const CartItemMsgContainer = () => {
    return (
        <div className="CartItemMsg__Container" >
            <div className="CartItemMsg" >
                <p className="CartItemMsg__p" >No hay productos agregados aun. </p>
                <Link to="/" className="CartItemMsg__a">Podes ir acá para empezar tu compra.</Link>
            </div>
        </div>
    )
}

export const CartItemMsg = () => {
    return (
            <div className="CartItemMsg" >
                <p className="CartItemMsg__p" >No hay productos agregados aun. </p>
                <Link to="/" className="CartItemMsg__a">Podes ir acá para empezar tu compra.</Link>
            </div>
    )
}

const CartItem = ({ id, name, quant, price, img }) => {

    const { removeProdFromCart } = useContext(CartContext)

    const handleRemove = (id) => {
        removeProdFromCart(id)
    }

    return (
        <>
                <ul className="CartItem__categorias">
                    <li>{name}</li>
                    <li>{quant}</li>
                    <li>{price}</li>
                    <li>{quant * price}</li>
                    <li onClick={() => handleRemove(id)} >Remover item</li>
                </ul>
        </>
    )

}
export default CartItem