 import { useState } from "react"
import { Button, Container } from "react-bootstrap"

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const addItemToCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const removeItemFromCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <Container>
            <Container>
                <Button variant="danger" size="sm" onClick={removeItemFromCount}>-</Button>
                <span>{count} (max. {stock} u.)</span>
                <Button variant="success" size="sm" onClick={addItemToCount}>+</Button>
            </Container>
            <Button onClick={()=>onAdd(count)} disabled={count === 0}>Añadir al carrito</Button>
        </Container>
    )
}

export default ItemCount