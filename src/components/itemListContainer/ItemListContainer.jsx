import React, { useEffect, useState } from "react"
import ItemCount from "../itemCount/ItemCount"
import { getProducts } from "../../mock/fakeApi"
import ItemList from "../itemList/ItemList"

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
            {/* {
                products.map((product => <p key={product.id}>{product.name}</p>))
            } */}
            <ItemList products={products}/>
            <ItemCount stock={11}/>
        </div>
    )
}

export default ItemListContainer