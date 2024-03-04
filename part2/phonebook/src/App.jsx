import { useState } from 'react'

import Header from './components/Header'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [filter, setFilter] = useState('')

    return (
        <div>
            <Header text='Phonebook' level='h2'/>
            <Filter setFilter={setFilter}/>
            <Header text='add a new' level='h3' />
            <PersonForm
                persons={persons}
                setPersons={setPersons}
            />
            <Header text='Numbers' level='h3' />
            <Persons persons={(filter === '')
                                ? persons
                                : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))} />
        </div>
    )
}

export default App
