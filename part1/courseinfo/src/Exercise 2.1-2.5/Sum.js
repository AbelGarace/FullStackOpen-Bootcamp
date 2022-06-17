const Sum =({parts})=>{
    let sum = 0;
    parts.forEach(part => {
        sum += part.exercises;
    });

    return <div>
        <p>total of {sum} exercises</p>
    </div>
}

export default Sum