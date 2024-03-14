import React, { useEffect, useState } from "react"
import ItemCount from "../ItemCount/itemCount"

function ItemListContainer({greeting}) {

    return(
        <ItemCount stock={11}/>
    )
}

export default ItemListContainer