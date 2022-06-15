import React, { useState } from 'react';

const CounterLeftRight = (props) => {

    const [counter,setCounter]=useState({
        left: 0,
        right:0,
        message: 'Initial message'
    })

    const [clicks,setClicks] = useState([]);

    const handleClickLeft = () => {
        const newCounterStatusLeft ={
            ...counter,
            left: counter.left + 1,
            message: 'Incremented left counter'
        }
        setCounter(newCounterStatusLeft);
        setClicks(prevClicks => ([...prevClicks, 'L']))
    }

    const handleClickRight = () => {
        const newCounterStatusRight ={
            ...counter,
            right: counter.right + 1,
            message: 'Incremented right counter'
        }
        setCounter(newCounterStatusRight);
        setClicks(prevClicks => ([...prevClicks, 'R']))
    }

    const WarningNotUsed = () =>{
        return <h1>Counter not using yet</h1>
    }

    const ListOfClicks = ({clicks}) => {
       
        return <p>{clicks.join(', ')}</p>
    }

    return <div>
        <span>Counter Left: {counter.left}</span>
        <button onClick={handleClickLeft}>Increment left</button>
        <button onClick={handleClickRight}>Increment right</button>
        <span>Counter Right: {counter.right}</span>
        <p>Total clicks: {clicks.length}</p>
        <p>Message: {counter.message}</p>
        {clicks}

        {clicks.length === 0 ? (<WarningNotUsed/>) : (<ListOfClicks clicks = {clicks}></ListOfClicks>)}
        
    </div>
}
export default CounterLeftRight;