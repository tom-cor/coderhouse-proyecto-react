import React, { useEffect, useState } from "react"
import { getProducts } from "../../mock/fakeApi"
import ItemList from "../itemList/ItemList"
import Container from "react-bootstrap/Container"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

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
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    console.log(categoryId)

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