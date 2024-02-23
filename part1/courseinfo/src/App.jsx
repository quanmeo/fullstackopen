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
                {props.data.name} {props.data.exercises}
            </p>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part data={props.parts[0]} />
            <Part data={props.parts[1]} />
            <Part data={props.parts[2]} />
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
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }

    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={[part1, part2, part3]} />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}

export default App