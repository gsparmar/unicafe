import React, { Fragment, useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
  };

  const Title = ({ title }) => {
    return <h1>{title}</h1>;
  };

  const Stat = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  };

  const Stats = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return (
      <div>
        {total ? (
          <table>
            <tbody>
              <Stat text='good' value={good} />
              <Stat text='neutral' value={neutral} />
              <Stat text='bad' value={bad} />
              <Stat text='all' value={total} />
              <Stat text='average' value={(good - bad) / total} />
              <Stat text='positive' value={`${(good / total) * 100}%`} />
            </tbody>
          </table>
        ) : (
          <p>no feedback given</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <Title title='give feedback' />
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <Title title='statistics' />
      <Stats good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
