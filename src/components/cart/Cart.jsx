import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartView from "../cartView/CartView"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const Cart = () => {

    const {cart} = useContext(CartContext)

    return(
        <div>
            {
             !cart.length
                ?   <div>
                        <h2>Carrito vacío</h2>
                        <Button as={Link} to={'/'}>Ir al catálogo</Button>
                    </div>
                :   <CartView/>
            }
        </div>
    )
}

export default Cart