import React from 'react'

const MaxVotos=(props)=>{

    let maxAnecdote = {anecdote:0, votos:0}

    for (let i = 0; i < props.anecdotes.length; i++) {
      if (props.votos[i] > maxAnecdote.votos) {
        maxAnecdote.votos=props.votos[i];
        maxAnecdote.anecdote = i;
      }
    }
     
    return <div>
        <h2>The anecdote most value with {maxAnecdote.votos} votes is</h2>
        <p>{props.anecdotes[maxAnecdote.anecdote]}</p>
    </div>
}

export default MaxVotos