import { Badge } from 'react-bootstrap'
import './cartWidget.css'
import {BsCartFill} from 'react-icons/bs'

 const CartWidget = () => {
    return(
        <div className="badgeContainer">
            <BsCartFill/>
            <Badge pill bg='primary'>107</Badge>
        </div>
    )
}

export default CartWidget