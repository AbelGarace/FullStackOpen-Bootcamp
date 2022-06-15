const Positive = (props) =>{

    let total = props.good + props.bad + props.neutral;
    let percentage = total === 0 ? 0 : (props.good * 100) / total;
    return <span>Positive {percentage} %</span>
}
export default Positive