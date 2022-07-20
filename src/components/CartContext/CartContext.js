import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [quantAdded, setquantAdded] = useState(0)
    const [cart, setCart] = useState([])

    useEffect(() => {
        let totalQuantity = 0 
        cart.forEach(prod => {
            totalQuantity += prod.quant
        })
        setquantAdded(totalQuantity)
    }, [cart])


    
//additem
    const addProdToCart = (productToAdd) => {
        if (!cart.some(prod => prod.id === productToAdd.id)) {
            setCart([...cart, productToAdd])
        }
    }


    const removeProdFromCart = (id) => {
        const removeProd = cart.filter(prod => prod.id !== id)
        setCart(removeProd)
        console.log(`removeProdFromCart --> ${id}`);
    }

    const clearCart = () => {
        setCart ([])
    }

    // const getQuantity = () => {
    //     let totalQuantity = 0
    //     cart.forEach(prod => totalQuantity += prod.quant)
    //     return totalQuantity
    // }

    const getTotalPrice = () => {
        let totalPrice = (cart[0].price * cart[0].quantity)
        return totalPrice
    }
    return (
        <CartContext.Provider value={{
            cart,
            addProdToCart,
            removeProdFromCart,
            clearCart,
            getTotalPrice,
            quantAdded,
            setquantAdded
        }} >
            {children}
        </CartContext.Provider>
    )
}
export default CartContext