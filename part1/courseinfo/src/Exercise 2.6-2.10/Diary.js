import { useState } from "react"
import React from "react"
const Diary = ()=>{

    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', telephone: '661661661' },
        {name: 'Maria Jose', telephone: '661661662'},
        {name: 'Jose Maria', telephone: '661661663'}
      ]) 

    const [ newName, setNewName ] = useState('')
    const [ newTelephone, setNewTelephone ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')

    const HandlerClick = (event) =>{
        event.preventDefault()
        if(persons.filter(p=>p.name === newName).length > 0){
            alert(newName + " exists in our diary")
        }else{
            let newPerson = {
                name: newName,
                telephone: newTelephone
            };
            setPersons(persons.concat(newPerson))
            setNewName('');
            setNewTelephone('');
        }
    }

    const handlerChangeName =(event)=>{
        let value= event.target.value;
        setNewName(value);
    }

    const handlerChangePhone =(event)=>{
        let value= event.target.value;
        setNewTelephone(value) 
    }

    const HandlerFilter = (event) =>{
        let value = event.target.value;
        setNewFilter(value)
    }
    
    const personsFilter = newFilter === ''?
    persons:
    persons.filter(p=>p.name.includes(newFilter))

    return (
        <div>
          <h2>Phonebook</h2>
            <div>
                <span>Filter By </span>
                <input onChange={HandlerFilter}/>
            </div>
          <h3>Add a New User</h3>
          <form>
            <div>
                <p>name:</p><input onChange={handlerChangeName} value={newName}/>
                <p>telephone:</p><input onChange={handlerChangePhone} value={newTelephone}/>
            </div>
            <div>
              <button type="submit" onClick={HandlerClick}>add</button>
            </div>
          </form>
          <h2>Numbers</h2>
          {personsFilter.map(person=>(
               <p key={person.name}> {person.name} -- {person.telephone}</p>
          ))}
        </div>      
        )
}


export default Diary