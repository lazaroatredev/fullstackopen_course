import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>;
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;
// const Display = ({ name, counter }) => {
//   if (counter === 0) return;
//   return (
//     <p>
//       {name} {counter}
//     </p>
//   );
// };

const StatisticsTable = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{average.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{positive.toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = all !== 0 ? (good - bad) / all : 0;
  const positive = good !== 0 ? (good / all) * 100 : 0;

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Heading text="give feedback" />
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      <Heading text="statistics" />
      <StatisticsTable
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
