import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
import { CartItemMsgContainer } from "../CartItem/CartItem";
import "../../sassCarpeta/index.scss"
import CartList from "../CartList/CartList";

const Cart = () => {

    const { quantAdded } = useContext(CartContext)

    return (
        <>
            {quantAdded === 0
                ? <CartItemMsgContainer />
                :
                <CartList />
            }

        </>
    )

}
export default Cart