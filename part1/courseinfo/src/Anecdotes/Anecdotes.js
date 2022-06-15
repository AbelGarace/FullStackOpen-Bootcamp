import { useState } from "react";
import MaxVotos from "./MaxVotos.js"

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


const Anecdotes = () =>{

    const [selected, setSelected] = useState(0)

    const initpoints =  {0: 0,1:0,2:0,3:0,4:0,5:0}

    const[votos, setVotos]= useState(
         initpoints
    )

    const Votar =()=>{
        const newPoitns ={...votos}
        newPoitns[selected]+=1;
        setVotos(newPoitns)
    }

    const NextAnecdote =()=>{
        let random = Math.floor(Math.random() * (6 - 0)) + 0;

        while(selected === random){
            random = Math.floor(Math.random() * (6 - 0)) + 0;
        }
        setSelected(random)
    }

    return <div>
        <p>{anecdotes[selected]} Votos: {votos[selected]}</p>
        <button onClick={Votar}>Add Vote</button>
        <button onClick={NextAnecdote}> next anecdote</button>
        <div>
            <MaxVotos anecdotes={anecdotes} votos={votos}></MaxVotos>
        </div>
    </div>
}

export default Anecdotes