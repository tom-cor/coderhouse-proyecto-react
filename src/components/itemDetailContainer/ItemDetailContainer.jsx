import { useEffect, useState } from "react"
import { getOneProduct } from "../../mock/fakeApi"
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap"
import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const[product, setProduct] = useState([])

    useEffect(() => {
        getOneProduct("2")
        .then((res) => setProduct(res))
        .catch((error) => console.log(error))
    }, [])
    console.log(product)

    return(
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer