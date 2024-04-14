import { Card, Button, ListGroup, ListGroupItem, NavLink } from "react-bootstrap"
import ItemCount from "../itemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {

    const {cart, addItem} = useContext(CartContext)
    console.log(cart)
    const [haveItemsBeenAdded, setHaveItemsBeenAdded] = useState(false)
    const onAdd = (quantity) => {
        if(quantity > 0) {
            addItem(product, quantity)
            setHaveItemsBeenAdded(true)
        }
    }

    return(
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <ListGroup>
                    <ListGroupItem>{product.description}</ListGroupItem>
                    <ListGroupItem>${product.price},00</ListGroupItem>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                {
                    haveItemsBeenAdded
                        ? <Button as={Link} to={'/cart'}>Ir al carrito</Button>
                        : <ItemCount stock={product.stock} onAdd={onAdd}/>
                }
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail