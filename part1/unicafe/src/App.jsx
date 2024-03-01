import { useState } from 'react'

const Button = (props) => {
    const {onClick, text} = props

    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Header = (props) => {
    const {text} = props
    return (
        <h2>{text}</h2>
    )
}

const StatisticLine = (props) => {
    const {text, value} = props

    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const StatisticTable = (props) => {
    const [good, neutral, bad] = props.points
    const total = good + neutral + bad
    if (total === 0)
    {
        return (
                <Header text='No feedback given' />
        )
    }

    const average = (good - bad) / total
    const positive = (good / total) * 100
    return (
            <table>
                <tbody>
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='all' value={total} />
                    <StatisticLine text='average' value={average} />
                    <StatisticLine text='positive' value={`${positive} %`} />
                </tbody>
            </table>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Header text='give feedback' />
            <Button onClick={handleGoodClick} text='good' />
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />
            <Header text='statistics' />
            <StatisticTable points={[good, neutral, bad]} />
        </div>
    )
}

export default App
