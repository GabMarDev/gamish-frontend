import React from "react"

function Home({setPage}) {

    function HandlePageToLogin() {
        setPage('Login')
    }
    
    return (
        <div>
            <header>
            <h1>Gamish</h1>
            <ul className="header">
                <li className="cabecalho" onClick={HandlePageToLogin}>Login</li>
                <li className="cabecalho">Loja</li>
                <li className="cabecalho">Sobre</li>
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