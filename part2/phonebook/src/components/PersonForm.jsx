import { useState } from "react"

const PersonForm = ({persons, setPersons}) => {
    
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const onChangeName = (event) => {
        const nameAdding = event.target.value.trim()
        setNewName(nameAdding)
    }

    const onChangeNumber = (event) => {
        const numberAdding = event.target.value.trim()
        setNewNumber(numberAdding)
    }

    const onAdding = (event) => {
        event.preventDefault()
        if (newName === '') {
            alert('name is empty')
        } else if (newNumber === '') {
            alert('number is empty')
        } else if (persons.find(person => person.name === newName) !== undefined) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const newPerson = {
                name: newName,
                number: newNumber,
                id: persons.length + 1
            }

            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <form onSubmit={onAdding}>
            <div>
                name: <input onChange={onChangeName} value={newName}/>
            </div>
            <div>
                number: <input onChange={onChangeNumber} value={newNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm