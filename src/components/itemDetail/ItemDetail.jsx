import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap"

const ItemDetail = ({product}) => {
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
                <Button variant="primary">Ver mas...</Button>
            </Card.Footer>
        </Card>
    )
}

export default ItemDetail