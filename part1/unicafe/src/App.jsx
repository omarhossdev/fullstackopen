import { useState } from 'react'

function Button({ onClick, text }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

const StatisticLine = ({ text, value, isTable = false }) => {
  if (isTable) return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

  return (<p>{text} {value}</p>)
}

const Statistics = ({ good, neutral, bad }) => {
  if (good + bad + neutral === 0) {
    return (<p>No feedback given</p>)
  }

  const all = good + neutral + bad;
  const average = (good - bad) / all
  const positivePercentage = (good / all) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} isTable={true} />
        <StatisticLine text="neutral" value={neutral} isTable={true} />
        <StatisticLine text="bad" value={bad} isTable={true} />
        <StatisticLine text="all" value={all} isTable={true} />
        <StatisticLine text="average" value={average.toFixed(2)} isTable={true} />
        <StatisticLine text="positive" value={`${positivePercentage.toFixed(2)} %`} isTable={true} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>

      <Button text="good" onClick={() => setGood(g => g + 1)} />
      <Button text="neutral" onClick={() => setNeutral(n => n + 1)} />
      <Button text="bad" onClick={() => setBad(b => b + 1)} />

      <h2>statistics</h2>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App