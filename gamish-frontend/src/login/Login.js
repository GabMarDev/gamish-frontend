import React, { useState } from "react"

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

    function HandleLogin() {
        const loginObject = {
            username: username,
            password: password
        }
    }

    return(
        <div>
            <input type="button" value="Voltar" onClick={HandlePageToHome}/>
            <h1>Login</h1>
            <label className="usuario" name="Usuario">Usuário</label>
            <input type="text" placeholder="Usuário" onChange={HandleUsername}/> 
            <label className="senha" name="Senha">Senha</label>
            <input type="password" placeholder="Senha" onChange={HandlePassword}/>
            <input type="button" value="Login" onClick={HandleLogin}/>
        </div>
    )
}

export default Login