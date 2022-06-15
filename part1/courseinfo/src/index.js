import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from './Title.js'
import Content from './Content.js'
import Total from './Total.js'
import Contador from './Contador.js'
import CounterLeftRight from './CounterLeftRight.js';
import Statistics from './Exercise1.6-1.14.js';


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <div>
      <Title course={course}></Title>
      <Content course={course}></Content>
      <Total course={course}></Total>
      </div>
      <div>
        <h1>Contador</h1>
        <Contador></Contador>
      </div>
      <div>
        <p>Positional Counter</p>
        <CounterLeftRight></CounterLeftRight>
      </div>

      <p>Exercises 1.6 -1.14</p>
      <Statistics></Statistics>
    </div>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
