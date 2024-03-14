const products = [
    {
        id: "1", 
        name: "E27 Color",
        stock: 10,
        price: 10000,
        description: "E27 color light bulb",
        image: "../images/products/e27-color.webp",
        category: "new"
    },
    {
        id: "2", 
        name: "E27 White Ambiance Fliament",
        stock: 10,
        price: 10000,
        description: "E27 White Ambiance Filament light bulb",
        image: "../images/products/e27-white_ambiance-filament.webp",
        category: "most sold"
    },
    {
        id: "3", 
        name: "E27 White Ambiance",
        stock: 10,
        price: 10000,
        description: "E27 White Ambiance light bulb",
        image: "../images/products/e27-white_ambiance.webp",
        category: ""
    },
    {
        id: "4", 
        name: "GU10 Color",
        stock: 10,
        price: 10000,
        description: "GU10 color light bulb",
        image: "../images/products/gu10-color.webp"
    }
]

export const getProducts = () => {
    let error = false
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("No hay hamburguesa")
            }
            else {
                resolve(products)
            }
        }, 3000)
    })
}