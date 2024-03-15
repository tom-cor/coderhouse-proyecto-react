const products = [
    {
        id: "1", 
        name: "E27 Color",
        stock: 11,
        price: 22000,
        description: "E27 color light bulb",
        image: "../images/products/e27-color.webp",
        category: "new"
    },
    {
        id: "2", 
        name: "E27 White Ambiance Fliament",
        stock: 3,
        price: 12000,
        description: "E27 White Ambiance Filament light bulb",
        image: "../images/products/e27-white_ambiance-filament.webp",
        category: "popular"
    },
    {
        id: "3", 
        name: "E27 White Ambiance",
        stock: 7,
        price: 15000,
        description: "E27 White Ambiance light bulb",
        image: "../images/products/e27-white_ambiance.webp",
        category: "discount"
    },
    {
        id: "4", 
        name: "GU10 Color",
        stock: 20,
        price: 20000,
        description: "GU10 color light bulb",
        image: "../images/products/gu10-color.webp",
        category: "discount"
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

export const getOneProduct = (id) => {
    let error = false
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(error) {
                reject("This are not the droids you're looking for")
            }
            else {
                let product = products.find((product) => product.id === id)
                resolve(product)
            }
        })
    }, 5000)
}