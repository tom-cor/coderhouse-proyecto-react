import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button, Table } from "react-bootstrap"

const CartView = () => {

    const {cart, cartPriceTotal, removeItem, clearCart} = useContext(CartContext)

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((item) => {
                        return(
                            <tr>
                                <td><img src={item.image} alt={item.name} style={{width:'8rem'}}/></td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.price * item.quantity}</td>
                                <td><Button className="btn btn-warning" onClick={()=>removeItem(item.id)}>X</Button></td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan={3}></td>
                    <td>Total</td>
                    <td>{cartPriceTotal()}</td>
                    <td><Button className="btn btn-danger" onClick={()=>clearCart()}>Vaciar carrito</Button></td>
                </tr>
            </tbody>
    </Table>
    )

}

export default CartView