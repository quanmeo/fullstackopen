const Header = ({level, text}) => {
    if (level === 'h1')
    {
        return <h1>{text}</h1>
    } else if (level === 'h2')
    {
        return <h2>{text}</h2>
    } else
    {
        return <h3>{text}</h3>
    }
}

export default Header