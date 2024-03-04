import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])
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
