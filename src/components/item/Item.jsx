import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap"

const Item = ({product}) => {
    return(
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price},00</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Ver mas...</Button>
            </Card.Footer>
        </Card>
    )
}

export default Item