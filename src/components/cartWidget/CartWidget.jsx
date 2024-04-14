import { Badge } from 'react-bootstrap'
import './cartWidget.css'
import {BsCartFill} from 'react-icons/bs'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

 const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

    return(
        <div className="badgeContainer">
            <BsCartFill/>
            { cartQuantity() > 0 && <Badge pill bg='primary'>{cartQuantity()}</Badge>}
        </div>
    )
}

export default CartWidget