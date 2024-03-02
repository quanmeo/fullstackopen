const Header = (props) => {
    return <h1>{props.course}</h1>
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((cur, part) => cur + part.exercises, 0)
    return <p>total of {total} exercises</p>
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part =>
            <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
  }

  const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course} />
  }
  
  export default App