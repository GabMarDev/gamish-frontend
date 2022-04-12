import React, { useState } from "react"
import "./Login.css"
import { gamishApi } from "../api/gamish_api"
import "./CreateNewUser"

function Login({setPage, setUser}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    function HandlePageToHome() {
        setPage('Home')
    }

    function HandleToCreate() {
        setPage('CreateNewUser')
    }

    function HandleUsername(event) {
        setUsername(event.target.value)
    }

    function HandlePassword(event) {
        setPassword(event.target.value)
    }

    async function HandleLogin() {
        const loginObject = {
            username: username,
            password: password
        }
        await gamishApi.post('/Login', loginObject).then(
            (response) => {
                if (response.data.id !== null) {
                    setUser(response.data) // Retorna, ID, username e status
                    setPage('Home')
                }
            }
        )
        .catch(
            (response) => {
                
            }
        )
    }

    return(
        <div className="pgLogin">
            <input type="button" value="Voltar" onClick={HandlePageToHome} className="btnVoltar"/>
            <div className="container">
            <h1>Login</h1>
                <label className="login" name="Usuario">Usuário</label>
                <input type="text" className="campo" placeholder="Usuário" onChange={HandleUsername}/> 
                <label className="login" name="Senha">Senha</label>
                <input type="password" className="campo" placeholder="Senha" onChange={HandlePassword}/>
                <input type="button" className="btnLogin" value="Login" onClick={HandleLogin}/>
                <span>Ainda não é usuário ? <button onClick={HandleToCreate}>Clique aqui!</button></span>
            </div>
        </div>
    )
}

export default Login