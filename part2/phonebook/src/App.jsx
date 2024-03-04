import { useState } from 'react'

import Header from './components/Header'
import Names from './components/Names'

const App = () => {
    const [persons, setPersons] = useState(
        [
            {
                name: 'Arto Hellas',
                id: 1
            }
        ]
    )

    const [newName, setNewName] = useState('')

    const onChange = (event) => {
        const nameAdding = event.target.value
        setNewName(nameAdding.trim())
    }

    const onAdd = (event) => {
        event.preventDefault()
        if (persons.find(person => person.name === newName) === undefined) {
            const newPerson = {
                name: newName,
                id: persons.length + 1
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
        } else {
            alert(`${newName} is already added to phonebook`)
        }
    }

    return (
        <div>
            <Header text='Phonebook' />
            <form onSubmit={onAdd}>
                <div>
                    name: <input onChange={onChange} value={newName}/>
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
                <div>debug: {newName}</div>
            </form>
            <Header text='Numbers' />
            <Names persons={persons} />
        </div>
    )
}

export default App
