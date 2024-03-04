const Record = ({person}) => {
    return (
        <p>{person.name} {person.number}</p>
    )
}


const PhoneBook = ({persons}) => {
    return (
        (persons.map(person => <Record key={person.id} person={person} />))
    )
}

export default PhoneBook