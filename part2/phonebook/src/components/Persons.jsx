const Person = ({person, deletePerson}) => {
    return (
        <p>{person.name} {person.number} <button onClick={deletePerson}>delete</button></p>
    )
}

const Persons = ({persons, deletePersonOf}) => {
    return (
        (persons.map(person =>
            <Person
                key={person.id}
                person={person}
                deletePerson={() => deletePersonOf(person.id, person.name)}
            />))
    )
}

export default Persons