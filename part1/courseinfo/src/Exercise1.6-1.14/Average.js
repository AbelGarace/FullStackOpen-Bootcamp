const Average = (props) => {
    let positive = props.good * 1;
    let negative = props.bad * -1;
    let total = props.good + props.neutral + props.bad

    let average = total===0? 0 : (positive + negative) / total;
    return <div>
        <p>{positive} {negative} {total}</p>
        <p> Average {average}</p>
    </div> 
}

export default Average