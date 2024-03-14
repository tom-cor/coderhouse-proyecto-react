import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Item from "../item/Item"

const ItemList = ({products}) => {
    return(
        <Row xs={1} md={2} className="g-4">
            {products.map((product) => <Col key={product.id}><Item product={product}/></Col>)}
        </Row>
        // <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", flexWrap:"wrap"}}>
        //     {products.map((product) => <Item key={product.id} product={product}/>)}
        // </div>
    )
}

export default ItemList