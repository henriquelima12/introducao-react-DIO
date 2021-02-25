import React from 'react'

function Button(props){

    return (
        <div>
            <h1>Aperte Aqui</h1>
            <h2>Exemplo de um componente de React</h2>
            <div>{props.children}</div>
        </div> 
    )
          
}

export default Button