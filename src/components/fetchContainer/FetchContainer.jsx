import React from "react"
import { useEffect, useState } from "react"

const FetchContainer = () => {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => setCharacter(data.results))
        .catch((error) => console.log(error))
    }, [])
    console.log(character)

    return(
        <div>
            {character.map((char) => <div><img src={char.image} alt="" /></div>)}
        </div>
    )
}

export default FetchContainer