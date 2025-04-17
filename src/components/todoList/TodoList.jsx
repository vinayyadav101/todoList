import { useState } from "react"
import './todolist.css'

export default function TodoList({id , todo , edit , deleteTodo ,isChecked ,updateCheck}) {
    const [input , setInput] = useState('')
    const [hiden , setHiden] =useState(true)

    
    return (
        <div className="todo" id={id}>
            <input type="checkbox" name="" hidden={!hiden} checked={isChecked} onChange={()=> updateCheck(id)}/>
            <h1 hidden={!hiden}>{todo}</h1>
            <input type="text" hidden={hiden} onChange={(e)=> setInput(e.target.value)} value={input} placeholder={input}></input>
            <button onClick={()=>{
                
                setHiden(!hiden)
                if (input.length !== 0 ) {
                    edit(id ,input , undefined)
                    setInput('')  
                } 
            }}>Edit</button>
            <button onClick={()=> deleteTodo(id)}>Delete</button>
        </div>
    )
}