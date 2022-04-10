import React from "react"

function Home({setPage, user, setUser}) {

    function HandlePageToLogin() {
        setPage('Login')
    }

    function HandlePageToLogoff() {
        setUser({})
    }

    return (
        <div>
            <header>
            <h1>Gamish</h1>
            <ul className="header">
                {Object.keys(user).length === 0 && <li className="cabecalho" onClick={HandlePageToLogin}>Login</li>}
                <li className="cabecalho">Loja</li>
                <li className="cabecalho">Sobre</li>
                {Object.keys(user).length !== 0 && <li className="cabecalho" onClick={HandlePageToLogoff}>Deslogar</li>}
            </ul>
            </header>
            <div className="nav-bar">
            <hr />
            <ul>
                <li className="itens-nav-bar">Categorias</li>
                <li className="itens-nav-bar">Notícias</li>
                <li className="itens-nav-bar">A tua loja</li>
            </ul>
            </div> 
        </div>
    )
}

export default Home