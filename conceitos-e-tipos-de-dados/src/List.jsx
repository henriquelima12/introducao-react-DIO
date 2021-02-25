import React from 'react'

const ListCustomer = [
    {
        id: 1,
        name: "Henrique Lima",
        skills: ['react', 'node', 'html', 'git']
    },
    {
        id: 2,
        name: "Fulano de Tal",
        skills: ['react native', 'css', 'js', 'webpack']
    },
    {
        id: 3,
        name: "Ciclano de Tal",
        skills: ['c']
    },
    {
        id: 4,
        name: "João da Silva",
        skills: ['php']
    }
]

const List = () => {

    const handleClick = (e, id) =>{
        console.log('cliente deletado')
        alert(`ID do cliente: ${id}`)
    }

    const renderCustomers = (customer) => {
        return(
            <div key={`customer-${customer.id}`}>
                <li>{customer.name} <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente</button></li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return(
            <div style = {{paddingLeft: '30px'}} key={`customer-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }

    return(
        <div>
            <ul>
                {ListCustomer.map(renderCustomers)}
            </ul>
        </div>
    )

    
}

export default List