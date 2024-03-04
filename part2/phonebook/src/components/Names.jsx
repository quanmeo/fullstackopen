const Name = ({person}) => {
    return (
        <p>{person.name}</p>
    )
}


const Names = ({persons}) => {
    return (
        (persons.map(person => <Name key={person.id} person={person} />))
    )
}

export default Names