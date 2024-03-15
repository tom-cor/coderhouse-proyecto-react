import { useEffect, useState } from "react"
import { getOneProduct } from "../../mock/fakeApi"
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap"
import ItemDetail from "../itemDetail/ItemDetail"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const[product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        getOneProduct(itemId)
        .then((res) => setProduct(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [])
    console.log(product)

    if(loading) {
        return(
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return(
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer