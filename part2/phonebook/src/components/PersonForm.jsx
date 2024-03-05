import { useState } from "react"
import personService from "../services/persons"

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
        } else {
            const person = persons.find(person => person.name === newName)
            if (person !== undefined) {
                if (person.number === newNumber) {
                    alert(`${newName} and ${newNumber} is already added to phonebook`)
                } else {
                    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                        const newPerson = {...person, number: newNumber}
                        personService
                            .update(newPerson.id, newPerson)
                            .then(updatedPerson => {
                                setPersons(persons.map(p => p.id === newPerson.id ? newPerson : p))
                                setNewName('')
                                setNewNumber('')
                            })
                    }
                }
            } else {
                const newPerson = {
                    name: newName,
                    number: newNumber
                }
                personService
                    .create(newPerson)
                    .then(returnedPerson => {
                        setPersons(persons.concat(returnedPerson))
                        setNewNumber('')
                        setNewName('')
                    })
            }
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