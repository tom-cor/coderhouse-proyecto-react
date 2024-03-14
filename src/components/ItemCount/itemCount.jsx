import { useState } from "react"
import { Button, Container } from "react-bootstrap"

const ItemCount = ({stock}) => {
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
    const onAdd = () => {
        if(count > 0) {
            console.log(`Añadido al carrito ${count} unidades`)
        }
    }

    return(
        <Container>
            <Container>
                <Button onClick={removeItemFromCount}>-</Button>
                <span>{count} (max. {stock} u.)</span>
                <Button onClick={addItemToCount}>+</Button>
            </Container>
            <Button onClick={onAdd} disabled={count === 0}>Añadir al carrito</Button>
        </Container>
    )
}

export default ItemCount