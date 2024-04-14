import { useEffect, useState } from "react"
import { getOneProduct } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Loader from "../loader/Loader"

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
    }, [itemId])

    if(loading) {
        return(
            <Loader/>
        )
    }

    return(
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer