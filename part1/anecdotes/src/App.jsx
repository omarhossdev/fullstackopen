import { useState, useEffect } from 'react'

const MostVotedAnecdote = ({ anecdotes ,votes }) => {
  if (votes.every(v => v === 0)) { // if votes is still all zeros (no votes yet)
    return;
  }
  const highest = Math.max(...votes)  // get the index of the highest vote in the array
  const highestIndex = votes.indexOf(highest)

  return (
    <>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highestIndex]}</p>
      <p>has {highest} votes</p>
    </>
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
   
  const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length)

  const startIndx = getRandomIndex(anecdotes)

  const [selected, setSelected] = useState(startIndx)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length)) // create an array of all zeros with same length of anecdotes so we can easily update
  const [tempArr, setTempArr] = useState([startIndx]); // we're using this array so we don't see duplicates

  function nextAnecdote() {
    const randIndex = getRandomIndex(anecdotes)

    if (tempArr.includes(randIndex)) return nextAnecdote()

    setTempArr(t => t = [...tempArr, randIndex])
    setSelected(index => index = randIndex)

    //console.log(randIndex) // FOR DEBUGGING
  }

  function voteAnecdote() {
    const newArr = [...votes]
    newArr[selected] = newArr[selected] + 1

    setVotes(v => v = newArr)
  }

  useEffect(() => {
    //console.log('Temp array: ', tempArr); // FOR DEBUGGING

    if (tempArr.length === anecdotes.length) { setTempArr([]) } // when the temporary array's length is equal to anecdotes length then clean it so we start from the beginning
  }, [tempArr])

  // FOR DEBUGGING
  /*useEffect(() => {
    console.log('Votes: ', votes);
  }, [votes])*/

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}

      <p>has {votes[selected]} votes</p>

      <button onClick={voteAnecdote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App