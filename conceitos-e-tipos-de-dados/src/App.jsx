import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {

    const renderShowHistory = (
        <div>
            Clique no botão abaixo para visualizar o histórico dos clientes
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = (
        <div>
            Clique no botão abaixo para adicionar um cliente
            <br />
            {buttonB}
        </div>
    )

    const showCustomer = () => {

        if(!hasCustomer) return null

        return(
            <div>
                <h1>Nome do Cliente: Henrique Lima</h1>
            </div>
        )
    }

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo ao curso de React JS</p>
            {hasCustomer ? renderShowHistory : renderAddCustomer}
            <div>
                {showCustomer()}
            </div>
        </div>
    )

}

export default App