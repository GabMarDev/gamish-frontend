import React from "react"

function Login({setPage}) {
    function HandlePageToHome() {
        setPage('Home')
    }
    return(
        <div>
            <input type="button" value="Voltar" onClick={HandlePageToHome}/>
            <h1>
                Login
            </h1>
            <label className="usuario" name="Usuario">Usuário</label>
            <input type="text" placeholder="Usuário" /> 
            <label className="senha" name="Senha">Senha</label>
            <input type="password" placeholder="Senha" />
            <input type="button" value="Login"/>
        </div>
    )
}

export default Login