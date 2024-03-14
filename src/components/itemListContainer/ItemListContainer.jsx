import React, { useEffect, useState } from "react"
import { getProducts } from "../../mock/fakeApi"
import ItemList from "../itemList/ItemList"
import Container from "react-bootstrap/Container"
import { Spinner } from "react-bootstrap"

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((res) => setProducts(res))
        .catch((error) => console.log(error, "Todo mal"))
        .finally(() => setLoading(false))
    }, [])
    console.log(products);

    if(loading) {
        return(
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return(
        <ItemList products={products}/>
    )
}

export default ItemListContainer