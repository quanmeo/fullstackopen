import { useState } from 'react'


const Header = ({text}) => {
    return (
        <h2>{text}</h2>
    )
}
const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const NumberVote = ({num}) => {
    return (
        <p>has {num} votes</p>
    )
}

const Anecdote = ({anecdote}) => {
    return (
        <p>{anecdote}</p>
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)

  const [maxVoteIdx, setMaxVoteIdx] = useState(0)

  const randomAnecdote = () => {
    const newSelected = Math.floor(Math.random() * (anecdotes.length))
    setSelected(newSelected)
  }

  const onVote = () => {
    const newVotes = [...votes]
    const newNumVote = newVotes[selected] + 1
    newVotes[selected] = newNumVote
    setVotes(newVotes)
    if (newNumVote >= newVotes[maxVoteIdx]) {
        setMaxVoteIdx(selected)
    }
  }

  return (
    <div>
        <Header text='Anecdote of the day' />
        <Anecdote anecdote={anecdotes[selected]} />
        <NumberVote num={votes[selected]} />
        <Button onClick={onVote} text='vote' />
        <Button onClick={randomAnecdote} text='next anecdote' />
        <Header text='Anecdote with most votes' />
        <Anecdote anecdote={anecdotes[maxVoteIdx]} />
    </div>
  )
}

export default App