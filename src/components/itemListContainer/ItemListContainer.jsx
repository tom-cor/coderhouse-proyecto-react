import React, { useEffect, useState } from "react"
import ItemCount from "../itemCount/ItemCount"
import { getProducts } from "../../mock/fakeApi"
import ItemList from "../itemList/ItemList"
import Container from "react-bootstrap/Container"
// import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then((res) => setProducts(res))
        .catch((error) => console.log(error, "Todo mal"))
    }, [])
    console.log(products);

    return(
        <div>
            <Container>
                <ItemList products={products}/>
            </Container>
            <ItemCount stock={11}/>
        </div>
    )
}

export default ItemListContainer