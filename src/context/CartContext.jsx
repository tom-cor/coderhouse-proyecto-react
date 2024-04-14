import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    // addItem(item, quantity)
    // removeItem(itemId)
    // clear()
    // isInCart: (id) => true/false

    const addItem = (item, quantity) =>{
        if(isInCart(item.id)) {
            const newCart = cart.map((obj) => {
                if(obj.id === item.id) {
                    return {...obj, quantity: obj.quantity + quantity}
                }
                else{
                    return obj
                }
            })
            setCart(newCart)
        }
        else
            setCart([...cart, {...item, quantity}])
    }

    const clearCart = () =>{
        setCart([])
    }

    const removeItem = (itemId) =>{
        setCart(cart.filter((item) => item.id !== itemId))
    }

    const isInCart = (itemId) => {
        return cart.some((item) => item.id === itemId)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc += item.quantity, 0)
    }

    const cartPriceTotal = () => {
        return cart.reduce((acc, item) => acc += item.quantity * item.price, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, isInCart, cartQuantity, cartPriceTotal}}>
            {children}
        </CartContext.Provider>
    )
}