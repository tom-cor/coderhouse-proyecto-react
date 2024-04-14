import React, { useEffect, useState } from "react"
import { getProducts } from "../../mock/fakeApi"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import Loader from "../loader/Loader"

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((res) => {
            if(categoryId) {
                setProducts(res.filter((item) => item.category === categoryId))
            }
            else {
                setProducts(res)
            }
        })
        .catch((error) => console.log(error, "Todo mal"))
        .finally(() => setLoading(false))
    }, [categoryId])

    if(loading) {
        return(
            <Loader/>
        )
    }

    return(
        <div>
            {categoryId 
                ? <h1>{greeting}{categoryId}</h1> 
                : <h1>{greeting}</h1> }
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer