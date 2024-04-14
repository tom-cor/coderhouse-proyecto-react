import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const CustomForm = (e) => {
    
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')

    const sendData = (e) => {
        e.preventDefault()
        if(name === '' || email === '' || telephone === '')
            alert('Complete el formulario')
        else{
            setFeedback('Nos comunicaremos con usted para coordinar el pago')
        }

    }

    // const captureName = (e) => {
    //     setName(e.target.value)
    // }

    // const captureEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const captureName = (e) => {
    //     setPhone(e.target.value)
    // }

    if(feedback !== ''){
        console.log(name, telephone, email)
        return <p>{feedback}</p>
    }

    return (
        <div>
            {/* <h1>Pepito tenía una granja</h1>
            <form onSubmit={sendData}>
                <input type="text" placeholder='Nombre completo' onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input type="number" placeholder='Telefono' onChange={(e) => setTelephone(e.target.value)}/>
                <button>Enviar</button>
            </form>
            <div>{name} {email} {telephone}</div> */}
            <Form onSubmit={sendData}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Nombre y apellido" onChange={(e) => setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your Nombre Completo with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" placeholder="1155558888" onChange={(e) => setTelephone(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CustomForm