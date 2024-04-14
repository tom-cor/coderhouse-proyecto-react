import { useEffect, useState } from "react"
import { getOneProduct } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Loader from "../loader/Loader"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const[product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    // useEffect(() => {
    //     setLoading(true)
    //     getOneProduct(itemId)
    //     .then((res) => setProduct(res))
    //     .catch((error) => console.log(error))
    //     .finally(() => setLoading(false))
    // }, [itemId])

    useEffect(() => {
        setLoading(true)
        // const productsCollection = collection(db, "products")
        // const docReference = doc(productsCollection, itemId)
        const docReference = doc(db, "products", itemId)
        getDoc(docReference)
        .then((res) => setProduct({id:res.id, ...res.data()}))
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