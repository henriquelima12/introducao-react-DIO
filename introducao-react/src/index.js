import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Button from './Button'
import Component from './Component'
import Propriedade from './Propriedade'
import PropFilho from './PropFilho'

function App(){
    return(
        <div>
            <Button>
                <Component></Component>
            </Button>
            <Propriedade titulo="Esse é o título"
            subtitulo="Esse é o subtítulo">
            </Propriedade>
            <Propriedade titulo="Esse é o título2"
            subtitulo="Esse é o subtítulo 2">
            </Propriedade> 
            <PropFilho>
                <ul>
                    <li>Ana</li>
                    <li>Beatriz</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </PropFilho>      
        </div>
            
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)