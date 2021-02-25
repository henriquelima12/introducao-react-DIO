import React from 'react'

const Event = () => {

    const name= 'Henrique Lima Araújo'

    const showEvent = () => {
        console.log('Evento Clicado')
        alert(name)
    }
    
    const button = <button onClick={showEvent}>Mostrar Evento</button>    

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }

    return(
        <div>
            <input onChange={handleChange} />
            {button}
        </div>
    )
    
}

export default Event
