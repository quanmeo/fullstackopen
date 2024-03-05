const Filter = ({setFilter}) => {

    const onChangeFilter = (event) => {
        setFilter(event.target.value.trim())
    }

    return (
        <div>
            filter shown with <input onChange={onChangeFilter} />
        </div>
    )
}

export default Filter