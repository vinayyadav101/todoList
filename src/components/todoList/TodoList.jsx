import { useState } from "react"

export default function TodoList({id , todo , edit , deleteTodo}) {
    const [input , setInput] = useState('')
    const [hiden , setHiden] =useState(true)
    return (
        <div className="todo" id={id}>
            <h1 hidden={!hiden}>{todo}</h1>
            <input type="text" hidden={hiden} onChange={(e)=> setInput(e.target.value)} value={input} placeholder={input}></input>
            <button onClick={()=>{
                setHiden(!hiden)
                if (input.length !== 0 ) {
                    edit(id ,input)
                    setInput('')  
                } 
            }}>Edit</button>
            <button onClick={()=> deleteTodo(id)}>Delete</button>
        </div>
    )
}