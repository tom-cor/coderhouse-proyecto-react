import React, { useEffect, useState } from "react"
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
        </div>
    )
}

export default ItemListContainer