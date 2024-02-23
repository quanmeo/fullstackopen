const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.name} {props.exercise}
            </p>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part name={props.parts[0].name} exercise={props.parts[0].exercise} />
            <Part name={props.parts[1].name} exercise={props.parts[1].exercise} />
            <Part name={props.parts[2].name} exercise={props.parts[2].exercise} />
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.total}</p>
        </>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const parts = [
        { name: part1, exercise: exercises1 },
        { name: part2, exercise: exercises2 },
        { name: part3, exercise: exercises3 },
    ]

    const total = exercises1 + exercises2 + exercises3

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total total={total} />
        </div>
    )
}

export default App
