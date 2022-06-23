import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from './Title.js'
import Content from './Content.js'
import Total from './Total.js'
import Contador from './Contador.js'
import CounterLeftRight from './CounterLeftRight.js';
import Statistics from './Exercise1.6-1.14.js';
import {Course} from './Exercise 2.1-2.5/Course.js';
import {Courses} from './Exercise 2.1-2.5/Course.js';
import Diary from './Exercise 2.6-2.10/Diary.js'

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

  const coursePart2 = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  const coursePart21 = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <div>
      {/* <div>
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

      <p>Exercise 2.1-2.5</p>

      <Course course={coursePart2}></Course>
      <Courses courses={coursePart21}></Courses> */}

      <Diary></Diary>
    </div>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
