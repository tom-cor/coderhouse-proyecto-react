import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'

const Checkout = () => {
    
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')
    const [user, setUser] = useState({})
    const [orderId, setOrderId] = useState('')

    const nameRegex = /^([A-Za-z]+ ?)+$/
    const emailRegex = /^([A-Za-z]+ ?)+@$/

    const {cart, cartPriceTotal, clearCart} = useContext(CartContext)

    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }
    console.log(user)

    const finlizePurchase = (e) => {
        e.preventDefault()
        setLoading(true)
        // Hacer la validación de los datos acá
        if(!user.name || !user.surname || !user.email || !user.telephone)
            alert("Complete todos los datos")
        else if(!nameRegex.test(user.name) || !nameRegex.test(user.surname))
            alert("Nombre o apellido no válido")
        else
        {
            let order = {
                user,
                items: cart,
                total: cartPriceTotal(),
                date: serverTimestamp()
            }
            const orders = collection(db, 'orders')
            addDoc(orders, order)
            .then((res) => {
                setOrderId(res.id)
                clearCart()
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        }
    }

    if(loading)
    {
        return <Loader/>
    }

    if(!cart.length && !orderId) {
        return  <div>
                    <h2>Carrito vacío</h2>
                    <Button className="btn btn-principal" as={Link} to={'/'}>Volver a home</Button>
                </div>
    }

    return (
        <div>
        {
            orderId !== ''
            ?   <div>
                    <h4>Generaste tu órden con exíto!</h4>
                    <h4>El id es: {orderId}</h4>
                    <Button className='btn btn-primary' as={Link} to='/'>Volver al home</Button>
                </div>
            :   <div>
                    <Form onSubmit={finlizePurchase}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required name='name' type="text" placeholder="Juan Andrés" onChange={userData}/>
                            {/* <Form.Control name='name' type="text" placeholder="Juan Andrés" onChange={(e) => setName(e.target.value)}/> */}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control required name='surname' type="text" placeholder="Perez" onChange={userData}/>
                            {/* <Form.Control name='surname' type="text" placeholder="Perez" onChange={(e) => console.log(e)}/> */}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required name='email' type="email" placeholder="juanperez@tudominio.com" onChange={userData} />
                            {/* <Form.Control name='email' type="email" placeholder="juanperez@tudominio.com" onChange={(e) => setEmail(e.target.value)} /> */}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control required name='telephone' type="tel" placeholder="1155558888" onChange={userData} />
                            {/* <Form.Control name='telephone' type="tel" placeholder="1155558888" onChange={(e) => setTelephone(e.target.value)} /> */}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            }
        </div>
    )
}

export default Checkout