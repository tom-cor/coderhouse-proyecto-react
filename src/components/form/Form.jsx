import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const CustomForm = (e) => {
    
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')
    const [user, setUser] = useState({})

    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }

    const sendData = (e) => {
        e.preventDefault()
        if(name === '' || email === '' || telephone === '')
            alert('Complete el formulario')
        else{
            setFeedback('Nos comunicaremos con usted para coordinar el pago')
        }

    }

    if(feedback !== ''){
        console.log(name, telephone, email)
        return <p>{feedback}</p>
    }

    return (
        <div>
            <Form onSubmit={sendData}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Juan Andrés" onChange={userData}/>
                    {/* <Form.Control name='name' type="text" placeholder="Juan Andrés" onChange={(e) => setName(e.target.value)}/> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control name='surename' type="text" placeholder="Perez" onChange={userData}/>
                    {/* <Form.Control name='surename' type="text" placeholder="Perez" onChange={(e) => console.log(e)}/> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="juanperez@tudominio.com" onChange={userData} />
                    {/* <Form.Control name='email' type="email" placeholder="juanperez@tudominio.com" onChange={(e) => setEmail(e.target.value)} /> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control name='telephone' type="tel" placeholder="1155558888" onChange={userData} />
                    {/* <Form.Control name='telephone' type="tel" placeholder="1155558888" onChange={(e) => setTelephone(e.target.value)} /> */}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CustomForm