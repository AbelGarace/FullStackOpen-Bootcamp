import { useState } from "react";
import Positive from './Exercise1.6-1.14/Positive.js'
import Average from './Exercise1.6-1.14/Average.js'
import Anecdotes from './Anecdotes/Anecdotes.js'

const Statistics = (props) =>{

    const initValues ={
        good:0,
        neutral:0,
        bad:0        
    }

    const [statistic, setStatistic] = useState(initValues)

    const handlerClick = (button) => {
        let status={
            ...statistic
        };

        if(button==='good'){
            const incrementGood = {
                ...statistic,
                good: statistic.good + 1
            }
            status = incrementGood
        }else if(button ==='neutral'){
            const incrementNeutral = {
                ...statistic,
                neutral: statistic.neutral + 1
            }
            status = incrementNeutral
        }else if(button==='bad') {
            const incrementBad = {
                ...statistic,
                bad: statistic.bad + 1
            }
            status = incrementBad
        }else{
            const incrementBad = {
                good: 0,
                bad: 0,
                neutral:0
            }
            status = incrementBad
        }

        const setStatus =()=>{
            setStatistic(status)
        }

         return setStatus
    }
    return <div>
        <h2>Give feedback</h2>
        <button onClick={handlerClick('good')}>good</button>
        <button  onClick={handlerClick('neutral')}>neutral</button>
        <button  onClick={handlerClick('bad')}>bad</button>
        <button onClick={handlerClick('reset')}>reset</button>
        <h2>Statistics</h2>
        <p>good {statistic.good}</p>
        <p>neutral {statistic.neutral}</p>
        <p>bad {statistic.bad}</p>
        <p>Total: {statistic.good + statistic.bad + statistic.neutral}</p>
        <Average good={statistic.good} neutral={statistic.neutral} bad={statistic.bad}></Average>
        <Positive good={statistic.good} neutral={statistic.neutral} bad={statistic.bad}></Positive>

        <h2>Anecdotes</h2>
        <Anecdotes></Anecdotes>
    </div>
}

export default Statistics