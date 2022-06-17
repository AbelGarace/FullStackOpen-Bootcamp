const Part =(props) =>{
    return <div>
            <ul>
                {props.parts.map(part =>(
                    <li key={part.id}>{part.name} {part.exercises}</li>
                ))}
            </ul>
        </div>
}

export default Part