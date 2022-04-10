import React, { useState } from "react"
import "./Login.css"
import { gamishApi } from "../api/gamish_api"

function Login({setPage}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    function HandlePageToHome() {
        setPage('Home')
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
                console.log(response.data.status)
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
            </div>
        </div>
    )
}

export default Login