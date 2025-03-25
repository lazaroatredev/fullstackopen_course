import { useState } from 'react'

const Heading = ({text}) => (
  <h2>{text}</h2>
)

const Button = ({text , onClick}) => (
  <button
    onClick={onClick}
  >
    {text}
  </button>
)

const App = () => {

  const [anecdotes, setAnecdotes] = useState([
    {
      text:'If it hurts, do it more often.' ,
      votes: 0,
    },
    {
      text:'Adding manpower to a late software project makes it later!' ,
      votes: 0,
    },
    {
      text:'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' ,
      votes: 0,
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 
      votes: 0,
    },
    {
      text: 'Premature optimization is the root of all evil.', 
      votes: 0,
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 
      votes: 0,
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', 
      votes: 0,
    },
    {
      text: 'The only way to go fast, is to go well.', 
      votes: 0,
    },
  ])
  const [selected, setSelected] = useState(0)

  const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 8);
  }

  const handleClick = () => {
    const generateNumber = generarNumeroAleatorio()
    setSelected(generateNumber)
  }

  const handleVote = () => {
    const modifyAnecdote = anecdotes[selected]
    modifyAnecdote.votes = modifyAnecdote.votes + 1

    setAnecdotes([
      ...anecdotes,
      anecdotes[selected] = modifyAnecdote
    ])
  }

  const moreVoteAnecdote = () => {
    return anecdotes.reduce((maxAnecdote, currentAnecdote) => 
      currentAnecdote.votes > maxAnecdote.votes ? currentAnecdote : maxAnecdote
    );
  }


  return (
    <div>
      <Heading text="Anecdote of the day"/>
      {anecdotes[selected].text}
      <br/>
      has {anecdotes[selected].votes} votes 
      <br/>
      <Button text="vote" onClick={handleVote}/>
      <Button text="next anecdote" onClick={handleClick}/>

      <Heading text="Anecdote with most votes"/>
      <p>
        {moreVoteAnecdote().text}
      </p>
    </div>
  )
}

export default App