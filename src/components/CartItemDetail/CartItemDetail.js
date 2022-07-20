import { useContext } from "react"
import CartContext from "../CartContext/CartContext";



const CartItemDetail = ({ id, name, quant, price }) => {

    const { removeProdFromCart, clearCart } = useContext(CartContext)
    const handleRemove = (id) => {
        removeProdFromCart(id)
    }

    return (

        <tr className="CartItem__categorias">
            {/* <th scope="row"  >1</th> */}
            <td>{name}</td>
            <td>{quant}</td>
            <td>{price}</td>
            <td>{quant * price}</td>
            <td onClick={() => handleRemove(id)} >Remover item</td>
        </tr>
    )
}
export default CartItemDetail
