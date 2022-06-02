const Total = (props) => {
let total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises

    return <p> Number of exercises {total} component </p>
}

export default Total