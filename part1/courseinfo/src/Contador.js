import React, { useState } from 'react';

const Contador = (props)=>{

    const [ counter, setCounter ] = useState(0)

    const handleClicDecrement =() => {setCounter(counter-1)};
    const handleClicIncrement =() => {setCounter(counter+1)};
    
    const message = () =>{
        let isEven = counter %2 ===0;
        let message = isEven ? 'Es Par' : 'Es Impar';

        return message;
    }

    const createHandlerClic = ( action ) => {

        if(action){
            return handleClicIncrement
        }else{
            return handleClicDecrement
        }
    }

    return <div>
        <p>El valor del contador es :</p>
        <h1>{counter}</h1>
         <p>{message}</p>
       
         <button onClick = {createHandlerClic(false)}>
            Drecementar func
        </button>

        <button onClick = {createHandlerClic(true)}>
            Incrementar func
        </button>
        <br></br>
        <button onClick = {() =>setCounter(counter-1)}>
            Drecementar
        </button>

        <button onClick = {() => setCounter(counter +1)}>
            Incrementar
        </button>
    </div>
}

export default Contador