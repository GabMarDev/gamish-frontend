import React, { useState } from "react";
import { gamishApi } from "../api/gamish_api";

function CreateNewUser() {

    const [userExist, setUserExist] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function teste(event) {
        event.preventDefault()
    }

    async function HandleUsername(event) {
        setUsername(event.target.value)
        if(username.length >= 5) {
            await gamishApi.get(`/VerifyUser?login=${username}`).then(
                (response) => {
                    console.log(response.data)
                    if(response.data.message == "Login já existe")
                        setUserExist(true)
                    else
                        setUserExist(false)
                }
            )
        }
    }

    function HandlePassword(event) {
        setPassword(event.target.value)
    }

    function HandleEmail(event) {
        setEmail(event.target.value)
    }

    async function HandleLogin(event) {
        event.preventDefault()
        const createLoginObj = {
            username: username,
            password: password,
            email: email
        }

    }

    return (
        <div>
            <div>
                <form onSubmit={HandleLogin} >
                    <label>Nome de usuário:</label>
                    <input type="text" placeholder="* Nome de usuário" onChange={HandleUsername}></input>
                    <label>Senha:</label>
                    <input type="password" placeholder="* Senha" onChange={HandlePassword}></input>
                    <label>E-mail:</label>
                    <input type="email" placeholder="E-mail" onChange={HandleEmail}></input>
                    <button type="submit" disabled={userExist}>Criar</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNewUser