import React, { useState } from 'react'

const Form = (e) => {
    
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')

    const sendData = (e) => {
        e.preventDefault()
        console.log(
            {
                nombreCompleto:name,
                correo:email,
                telefono:telephone
            }
        )
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

    return (
        <div>
            <h1>Pepito tenía una granja</h1>
            <form onSubmit={sendData}>
                <input type="text" placeholder='Nombre completo' onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input type="number" placeholder='Telefono' onChange={(e) => setTelephone(e.target.value)}/>
                <button>Enviar</button>
            </form>
            <div>{name} {email} {telephone}</div>
        </div>
    )
}

export default Form