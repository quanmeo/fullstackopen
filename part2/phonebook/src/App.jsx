import { useState } from 'react'

import Header from './components/Header'
import PhoneBook from './components/PhoneBook'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const onChangeName = (event) => {
        const nameAdding = event.target.value
        setNewName(nameAdding.trim())
    }
    const onChangeNumber = (event) => {
        const numberAdding = event.target.value
        setNewNumber(numberAdding.trim())
    }

    const onChangeFilter = (event) => {
        const filterValue = event.target.value
        setFilter(filterValue.trim())
    }

    const onAdd = (event) => {
        event.preventDefault()
        if (newName === '') {
            alert('name is empty')
        } else if (newNumber === '') {
            alert('number is empty')
        } else if (persons.find(person => person.name === newName) === undefined) {
            const newPerson = {
                name: newName,
                number: newNumber,
                id: persons.length + 1,
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        } else {
            alert(`${newName} is already added to phonebook`)
        }
    }

    return (
        <div>
            <Header text='Phonebook' />
            <div>
                filter shown with <input onChange={onChangeFilter} value={filter} />
            </div>
            <Header text='add a new' />
            <form onSubmit={onAdd}>
                <div>
                    name: <input onChange={onChangeName} value={newName} />
                </div>
                <div>
                    number: <input onChange={onChangeNumber} value={newNumber} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
                <div>debug: {newName}</div>
            </form>
            <Header text='Numbers' />
            <PhoneBook persons={(filter === '')
                                ? persons
                                : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))} />
        </div>
    )
}

export default App
