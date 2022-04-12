import React, { useState } from "react";
import { gamishApi } from "../api/gamish_api";

function CreateNewUser() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function HandleUsername(event) {
        setUsername(event.target.value)
    }

    function HandlePassword(event) {
        setPassword(event.target.value)
    }

    function HandleEmail(event) {
        setEmail(event.target.value)
    }

    async function HandleSubmit(event) {
        event.preventDefault()
        const data = {
            username: username,
            password: password,
            email: email
        }

        if(username !== '' && password !== '') {
            const response = await gamishApi.post('/CreateUser', data)
            //console.log(response)
        }else{
            alert('Por favor, preencha os campos solicitados!')
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={HandleSubmit}>
                    <label>Nome de usuário:</label>
                    <input type="text" placeholder="*Nome de usuário" onChange={HandleUsername}></input>
                    <label>Senha:</label>
                    <input type="password" placeholder="*Senha" onChange={HandlePassword}></input>
                    <label>E-mail:</label>
                    <input type="email" placeholder="E-mail" onChange={HandleEmail}></input>
                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNewUser